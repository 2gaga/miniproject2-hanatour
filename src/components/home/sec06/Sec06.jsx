import './sec06.css';

const Sec06 = () => {
    return (
        <section className="section6">
            <div className="inner">
                <div className="card01">
                    <div className="card01_title">
                        <h3>하나투어 닷컴 고객센터</h3>
                        <span>1577-1233</span>
                    </div>          
                    {/* 이미지 경로만 /images/로 수정했습니다 */}
                    <img src="/images/sec08_button.png" alt="하나투어 닷컴 고객센터 바로가기" />
                </div>
                
                <ul className="cards">
                    <li className="card02">
                        <h3>카드 · 제휴 혜택</h3>
                        <img src="/images/sec08_button.min.png" alt="카드,제휴 혜택 바로가기" />
                    </li>
                    <li className="card03">
                        <h3>공지사항</h3>
                        <img src="/images/sec08_button.min.png" alt="공지사항 바로가기" />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Sec06;