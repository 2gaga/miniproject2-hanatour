import { useState } from 'react'; // 1. useState 임포트
import './sec04.css';

const Sec04 = () => {
    // 2. 현재 보여줄 이미지 경로를 상태로 관리 (초기값: 첫 번째 이미지)
    const [imgSrc, setImgSrc] = useState('/images/sec06_01.png');
    // 어떤 버튼이 활성화되었는지 알기 위한 상태
    const [activeIndex, setActiveIndex] = useState(0);

    const tabs = [
        { id: 0, label: '확실한 행복 푸켓 여행', img: '/images/sec06_01.png' },
        { id: 1, label: '지금 이 밤하늘 아래로 몽골 여행', img: '/images/sec06_02.png' },
        { id: 2, label: '디즈니 어드벤처 탐험기', img: '/images/sec06_03.png' },
    ];

    return (
        <section className="section4">
            <div className="inner">
                <h2>하나투어 여행 기획전</h2>
                <div class="recommend-wrap">
                    <ul className="recommend-tabs">
                        {tabs.map((tab, index) => (
                            <li key={tab.id}>
                                <button
                                    type="button"
                                    className={activeIndex === index ? 'is-active' : ''}
                                    onClick={() => {
                                        setImgSrc(tab.img); // 이미지 경로 변경
                                        setActiveIndex(index); // 활성 버튼 변경
                                    }}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="recommend-content">
                        <img src={imgSrc} alt="여행 기획전" id="recommendImg" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sec04;
