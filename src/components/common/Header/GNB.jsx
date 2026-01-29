import './Header.css';

const GNB = () => {
    return (
        <nav className="gnb">
            <ul className="menu">
                <li className="menu-item">
                    <span className="main-link">베스트</span>
                </li>
                <li className="menu-item">
                    <span className="main-link">해외여행</span>
                    <ul className="sub-menu">
                        <li>
                            <span>동남아/대만/서남아</span>
                        </li>
                        <li>
                            <span>일본</span>
                        </li>
                        <li>
                            <span>유럽/아프리카</span>
                        </li>
                        <li>
                            <span>중국/홍콩/마카오</span>
                        </li>
                        <li>
                            <span>괌/사이판/호주</span>
                        </li>
                        <li>
                            <span>미주/하와이/캐나다</span>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <span className="main-link">항공</span>
                </li>
                <li className="menu-item">
                    <span className="main-link">호텔</span>
                    <ul className="sub-menu">
                        <li>
                            <span>해외호텔</span>
                        </li>
                        <li>
                            <span>국내숙박</span>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <span className="main-link">투어/입장권</span>
                    <ul className="sub-menu">
                        <li>
                            <span>일본</span>
                        </li>
                        <li>
                            <span>동남아/대만</span>
                        </li>
                        <li>
                            <span>남태평양</span>
                        </li>
                        <li>
                            <span>유럽/중동/아프리카</span>
                        </li>
                        <li>
                            <span>미주</span>
                        </li>
                        <li>
                            <span>중국/홍콩/몽골</span>
                        </li>
                        <li>
                            <span>해외 렌터카</span>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <span className="main-link">국내여행</span>
                    <ul className="sub-menu">
                        <li>
                            <span>제주여행</span>
                        </li>
                        <li>
                            <span>남도여행</span>
                        </li>
                        <li>
                            <span>강원도여행</span>
                        </li>
                        <li>
                            <span>섬 여행</span>
                        </li>
                        <li>
                            <span>경남여행</span>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <span className="main-link">테마여행</span>
                    <ul className="sub-menu">
                        <li>
                            <span>허니문</span>
                        </li>
                        <li>
                            <span>크루즈</span>
                        </li>
                        <li>
                            <span>밍글링 투어</span>
                        </li>
                        <li>
                            <span>트레킹/레저</span>
                        </li>
                        <li>
                            <span>MICE</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default GNB;
