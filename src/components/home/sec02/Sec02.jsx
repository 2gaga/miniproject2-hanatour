import { useState } from 'react';
import travelData from '../../../assets/api/travelData';
import ListBox from '../../card/ListBox';
import Filter_List from '../../card/Filter_List';
import './sec02.css';

const filterMenu2 = [
    { label: '전체', value: 'all', imgDefault: null, imgActive: null },
    {
        label: '워터 액티비티',
        value: '워터액티비티',
        imgDefault: '/images/sec03_01.png',
        imgActive: '/images/sec03_w1.png',
    },
    {
        label: '트레일 어드벤처',
        value: '트레일어드벤처',
        imgDefault: '/images/sec03_02.png',
        imgActive: '/images/sec03_w2.png',
    },
    {
        label: '휴식 힐링',
        value: '휴식힐링',
        imgDefault: '/images/sec03_03.png',
        imgActive: '/images/sec03_w3.png',
    },
    {
        label: '미식 여행',
        value: '미식여행',
        imgDefault: '/images/sec03_04.png',
        imgActive: '/images/sec03_w4.png',
    },
    {
        label: '익스트림 어드벤처',
        value: '익스트림어드벤처',
        imgDefault: '/images/sec03_05.png',
        imgActive: '/images/sec03_w5.png',
    },
    {
        label: '온천',
        value: '온천',
        imgDefault: '/images/sec03_06.png',
        imgActive: '/images/sec03_w6.png',
    },
];

const Sec02 = () => {
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
    });
    return (
        <section class="section2">
            <div class="inner">
                <div className="sec02_top">
                    <h2>취향에 따라 떠나는 여행</h2>
                    <button type="button" className="more">
                        <span>더보기+</span>
                    </button>
                </div>
                <Filter_List filters={filterMenu2} current={current} onChange={onChange} />
                <ListBox data={filteredData} />
            </div>
        </section>
    );
};

export default Sec02;
