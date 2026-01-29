import { useState } from 'react';
import './style.css';

const EasyTap = ({ onSearch }) => {
    const [place, setPlace] = useState('');
    const [date, setDate] = useState('');
    const [people, setPeople] = useState(1);
    const [activeTab, setActiveTab] = useState(0);

    const visualform = (e) => {
        e.preventDefault();
        onSearch({ place, date, people });
    };

    const tabs = [
        { img: '/images/visual1-1.png', label: '숙소' },
        { img: '/images/visual1-2.png', label: '항공권' },
        { img: '/images/visual1-3.png', label: '기차표' },
        { img: '/images/visual1-4.png', label: '엔터카·공항픽업' },
        { img: '/images/visual1-5.png', label: '투어·티켓' },
        { img: '/images/visual1-6.png', label: '항공+호텔' },
    ];

    return (
        <div className="easytap">
            {/* 탭 버튼 */}
            <ul className="easylist">
                {tabs.map((tab, idx) => (
                    <li
                        key={idx}
                        className={activeTab === idx ? 'active' : ''}
                        onClick={() => setActiveTab(idx)}
                    >
                        <img src={tab.img} alt={tab.label} />
                        <span>{tab.label}</span>
                    </li>
                ))}
            </ul>

            {/* 검색 폼 */}
            <form className="visualform" onSubmit={visualform}>
                <div className="placeform">
                    <label htmlFor="place-input">
                        <img src="/images/visual2-1.png" alt="장소" />
                    </label>
                    <input
                        id="place-input"
                        type="text"
                        placeholder="어디로 떠나세요?"
                        value={place}
                        onChange={(e) => setPlace(e.target.value)}
                    />
                </div>

                <div className="dateform">
                    <label htmlFor="date-input">
                        <img src="/images/visual2-2.png" alt="날짜" />
                    </label>
                    <input
                        id="date-input"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className="peopleform">
                    <label htmlFor="people-input">
                        <img src="/images/visual2-3.png" alt="사람 수" />
                    </label>
                    <select
                        id="people-input"
                        value={people}
                        onChange={(e) => setPeople(Number(e.target.value))}
                    >
                        {[...Array(10)].map((_, idx) => (
                            <option key={idx + 1} value={idx + 1}>
                                {idx + 1}명
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="easysearch-btn">
                    <img src="/images/visual2-4.png" alt="검색버튼" />
                </button>
            </form>
        </div>
    );
};

export default EasyTap;
