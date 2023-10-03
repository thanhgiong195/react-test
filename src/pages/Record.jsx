import { useState, useEffect } from 'react';
import axiosInstance from '../untils/api';

import DiaryItem from '../components/diary/Item';
import ExerciseItem from '../components/exercise/Item';
import Chart from '../components/Chart';

import Image1 from '../assets/images/MyRecommend-1.jpg';
import Image2 from '../assets/images/MyRecommend-2.jpg';
import Image3 from '../assets/images/MyRecommend-3.jpg';

const Record = () => {
    const [diaries, setDiaries] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lastTotal, setLastTotal] = useState(0);

    const [page, setPage] = useState(1);

    useEffect(() => {
        document.title = 'My Record';
    }, []);

    useEffect(() => {
        if (loading) return;

        setLoading(true);
        axiosInstance.get('food?page=' + page + '&limit=8')
            .then(res => {
                const newDiaries = [...diaries, ...res.data];
                setDiaries(newDiaries);
                setExercises([...newDiaries, ...newDiaries, ...newDiaries]);
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
                <div className="service record w-100">
                    <div className="service__item" >
                        <div className="">
                            <img src={Image1} alt="icon" />
                            <div className="content">
                                <h5>BODY RECORD</h5>
                                <p>自分のカラダの記録</p>
                            </div>
                        </div>

                    </div>
                    <div className="service__item">
                        <div className="">
                            <img src={Image2} alt="icon" />
                            <div className="content">
                                <h5>MY EXERCISE</h5>
                                <p>自分の運動の記録</p>
                            </div>
                        </div>

                    </div>
                    <div className="service__item">
                        <div className="">
                            <img src={Image3} alt="icon" />
                            <div className="content">
                                <h5>MY DIARY</h5>
                                <p>自分の日記</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="exercise chart__record">
                    <div className="exercise__title">
                        <h4>BODY <br />RECORD</h4>
                        <p className="date">2021.05.21</p>
                    </div>
                    <div>
                        <Chart />
                    </div>
                </div>

                <div className="exercise">
                    <div className="exercise__title">
                        <h4>MY <br />EXERCISE</h4>
                        <p className="date">2021.05.21</p>
                    </div>

                    <div className="exercise__content">
                        {exercises && exercises.map((item, index) => <ExerciseItem key={index} {...item} />)}
                    </div>
                </div>

                <h4 className="diary__title">MY DIARY</h4>
                <div className="list__diary">
                    {diaries && diaries.map((diary, index) => <DiaryItem key={index} {...diary} />)}
                </div>

                {lastTotal == 8 && <button className='loadmore' onClick={() => setPage(page + 1)}>
                    {loading ? '読み込み中...' : '自分の日記をもっと見る'}
                </button>}
            </div>
        </>
    )
}

export default Record;
