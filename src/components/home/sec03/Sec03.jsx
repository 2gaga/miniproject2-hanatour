import './sec03.css';

const Sec03 = () => {
    return (
        <section className="section3">
            <div className="inner">
                <h2>국내여행 인기 TOP5</h2>
                <div className="card-block">
                    {/* 왼쪽 큰 카드 */}
                    <div className="card big-card">
                        <img src="/images/sec5_01.png" alt="전국빵지순례"/>
                    </div>

                    {/* 오른쪽 작은 카드 4개 */}
                    <ul>
                        <li className="card">
                            <img src="/images/sec5_02.png" alt="부산여행"/>
                        </li>
                        <li className="card">
                            <img src="/images/sec5_03.png" alt="크리스마스 연말여행"/>
                        </li>
                        <li className="card">
                            <img src="/images/sec5_04.png" alt="제주유채꽃여행"/>
                        </li>
                        <li className="card">
                            <img src="/images/sec5_05.png" alt="국내설산여행"/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Sec03;