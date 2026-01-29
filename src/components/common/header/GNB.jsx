import './header.css';
import { Link } from 'react-router-dom';

const GNB = () => {
    return (
        <nav className="gnb">
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/best" className="main-link">
                        베스트
                    </Link>
                </li>
                <li className="menu-item">
                    <a href="#" className="main-link">
                        해외여행
                    </a>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">동남아/대만/서남아</a>
                        </li>
                        <li>
                            <a href="#">일본</a>
                        </li>
                        <li>
                            <a href="#">유럽/아프리카</a>
                        </li>
                        <li>
                            <a href="#">중국/홍콩/마카오</a>
                        </li>
                        <li>
                            <a href="#">괌/사이판/호주</a>
                        </li>
                        <li>
                            <a href="#">미주/하와이/캐나다</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="#" className="main-link">항공</a>
                </li>
                <li className="menu-item">
                    <a href="#"className="main-link">호텔</a>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">해외호텔</a>
                        </li>
                        <li>
                            <a href="#">국내숙박</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="#"className="main-link">투어/입장권</a>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">일본</a>
                        </li>
                        <li>
                            <a href="#">동남아/대만</a>
                        </li>
                        <li>
                            <a href="#">남태평양</a>
                        </li>
                        <li>
                            <a href="#">유럽/중동/아프리카</a>
                        </li>
                        <li>
                            <a href="#">미주</a>
                        </li>
                        <li>
                            <a href="#">중국/홍콩/몽골</a>
                        </li>
                        <li>
                            <a href="#">해외 렌터카</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="#" className="main-link">국내여행</a>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">제주여행</a>
                        </li>
                        <li>
                            <a href="#">남도여행</a>
                        </li>
                        <li>
                            <a href="#">강원도여행</a>
                        </li>
                        <li>
                            <a href="#">섬 여행</a>
                        </li>
                        <li>
                            <a href="#">경남여행</a>
                        </li>
                    </ul>
                </li>
                <li className="menu-item">
                    <a href="#" className="main-link">테마여행</a>
                    <ul className="sub-menu">
                        <li>
                            <a href="#">허니문</a>
                        </li>
                        <li>
                            <a href="#">크루즈</a>
                        </li>
                        <li>
                            <a href="#">밍글링 투어</a>
                        </li>
                        <li>
                            <a href="#">트레킹/레저</a>
                        </li>
                        <li>
                            <a href="#">MICE</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default GNB;
