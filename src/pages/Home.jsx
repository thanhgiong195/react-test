import { Col, Row } from 'antd';
import { useState, useEffect } from 'react';
import axiosInstance from '../untils/api';

import Chart from '../components/Chart';
import FoodItem from '../components/food/Item';

import ImageBanner from '../assets/images/d01.jpg';
import ImagePercent from '../assets/images/percent.png';
import ImageBgService from '../assets/images/bg_service.png';
import ImageKnife from '../assets/images/icons/icon_knife.png';
import ImageCup from '../assets/images/icons/icon_cup.png';

const sectionStyle = {
    backgroundImage: `url(${ImageBgService})`
};

const Home = () => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lastTotal, setLastTotal] = useState(0);

    const [page, setPage] = useState(1);
    const [filterType, setFilterType] = useState(null);

    useEffect(() => {
        document.title = 'Home Page';
    }, []);

    useEffect(() => {
        if (loading) return;

        setLoading(true);
        axiosInstance.get('food?page=' + page + '&limit=8' + (filterType ? '&type=' + filterType : ''))
            .then(res => {
                const newFoods = [...foods, ...res.data];
                setFoods(newFoods);
                setLastTotal(res.data.length);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
    }, [page, filterType]);

    const setFilter = (type) => {
        setPage(1);
        setFilterType(type);
        setFoods([]);
    }

    return (
        <>
            <div className='banner'>
                <Row>
                    <Col span={10} className='image'>
                        <img className='percent' src={ImagePercent} alt="percent" />
                        <img className='food' src={ImageBanner} alt="banner" />
                    </Col>
                    <Col span={14} className='chart'><Chart padding={40} /></Col>
                </Row>
            </div>

            <div className="container">
                <section className="service w-100">
                    <div className="service__item" style={sectionStyle} onClick={() => setFilter(1)}>
                        <img src={ImageKnife} alt="icon" />
                        <h5>Morning</h5>
                    </div>
                    <div className="service__item" style={sectionStyle} onClick={() => setFilter(2)}>
                        <img src={ImageKnife} alt="icon" />
                        <h5>Lunch</h5>
                    </div>
                    <div className="service__item" style={sectionStyle} onClick={() => setFilter(3)}>
                        <img src={ImageKnife} alt="icon" />
                        <h5>Dinner</h5>
                    </div>
                    <div className="service__item" style={sectionStyle} onClick={() => setFilter(4)}>
                        <img src={ImageCup} alt="icon" />
                        <h5>Snack</h5>
                    </div>
                </section>

                <section>
                    <div className="list__food">
                        {foods && foods.map((food, index) => <FoodItem key={index} {...food} />)}
                    </div>

                    {lastTotal == 8 && <button className='loadmore' onClick={() => setPage(page + 1)}>
                        {loading ? '読み込み中...' : '記録をもっと見る'}
                    </button>}
                </section>
            </div>
        </>
    )
}

export default Home;
