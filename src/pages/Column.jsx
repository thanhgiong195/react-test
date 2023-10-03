import { useState, useEffect } from 'react';
import axios from 'axios';

import BlogItem from '../components/blog/Item';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lastTotal, setLastTotal] = useState(0);

    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        axios.get('https://6396a6efa68e43e418083c0a.mockapi.io/food?page=' + page + '&limit=8')
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
                <div className="service blog w-100">
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
                </div>

                <div className="list__blog">
                    {blogs && blogs.map((blog, index) => <BlogItem key={index} {...blog} />)}
                </div>

                {lastTotal == 8 && <button className='loadmore' onClick={() => setPage(page + 1)}>
                    {loading ? '読み込み中...' : 'コラムをもっと見る'}
                </button>}
            </div>
        </>
    )
}

export default Home;
