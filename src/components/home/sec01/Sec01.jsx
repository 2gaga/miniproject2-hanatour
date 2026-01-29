import { useState } from 'react';
import Filter_List from '../../card/Filter_List';
import ListBox from '../../card/ListBox';
import travelData from '../../../assets/api/travelData';
import './style.css';

const filterMenu = [
    { label: '전체', value: 'all', imgDefault: null, imgActive: null },
    {
        label: '패키지',
        value: '패키지',
        imgDefault: '/images/sec02_menu001.png',
        imgActive: '/images/sec02_w1.png',
    },
    {
        label: '항공+호텔',
        value: '항공+호텔',
        imgDefault: '/images/sec02_menu002.png',
        imgActive: '/images/sec02_w2.png',
    },
    {
        label: '이색여행',
        value: '이색여행',
        imgDefault: '/images/sec02_menu03.png',
        imgActive: '/images/sec02_w3.png',
    },
    {
        label: '국내여행',
        value: 'in',
        imgDefault: '/images/sec02_menu004.png',
        imgActive: '/images/sec02_w4.png',
    },
    {
        label: '해외여행',
        value: 'out',
        imgDefault: '/images/sec02_menu005.png',
        imgActive: '/images/sec02_w5.png',
    },
];

const Sec01 = () => {
    const [current, setCurrent] = useState('all');

    const onChange = (value) => {
        setCurrent(value);
    };

    const filteredData = travelData.filter((item) => {
        if (current === 'all') return true;

        if (current === 'in' || current === 'out') {
            return item.Internal === current;
        }

        return item.type.includes(current);
        //return item.type === current;
    });

    return (
        <section className="section1">
            <div className="inner">
                <div className="sec01_top">
                    <h2>블랙프라이데이 타임세일</h2>
                    <button type="button" className="more">
                        <span>더보기+</span>
                    </button>
                </div>
                <Filter_List filters={filterMenu} current={current} onChange={onChange} />
                <ListBox data={filteredData} current={current} />
            </div>
        </section>
    );
};

export default Sec01;
