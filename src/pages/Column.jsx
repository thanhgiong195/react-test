import { useState, useEffect } from 'react';
import axiosInstance from '../untils/api';

import BlogItem from '../components/blog/Item';

const Column = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lastTotal, setLastTotal] = useState(0);

    const [page, setPage] = useState(1);

    useEffect(() => {
        document.title = 'My Column';
    }, []);

    useEffect(() => {
        if (loading) return;

        setLoading(true);
        axiosInstance.get('food?page=' + page + '&limit=8')
            .then(res => {
                const newBlogs = [...blogs, ...res.data];
                setBlogs(newBlogs);
                setLastTotal(res.data.length);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
    }, [page]);

    return (
        <>
            <div className="container">
                <section className="service blog w-100">
                    <div className="service__item">
                        <h5>RECOMMENDED <br />COLUMN</h5>
                        <p>オススメ</p>
                    </div>
                    <div className="service__item">
                        <h5>RECOMMENDED <br />DIET</h5>
                        <p>ダイエット</p>
                    </div>
                    <div className="service__item">
                        <h5>RECOMMENDED <br />BEAUTY</h5>
                        <p>美容</p>
                    </div>
                    <div className="service__item">
                        <h5>RECOMMENDED <br />HEALTH</h5>
                        <p>健康</p>
                    </div>
                </section>

                <section>
                    <div className="list__blog">
                        {blogs && blogs.map((blog, index) => <BlogItem key={index} {...blog} />)}
                    </div>

                    {lastTotal == 8 && <button className='loadmore' onClick={() => setPage(page + 1)}>
                        {loading ? '読み込み中...' : 'コラムをもっと見る'}
                    </button>}
                </section>
            </div>
        </>
    )
}

export default Column;
