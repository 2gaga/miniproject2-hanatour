import Search from './Search';
import GNB from './GNB';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="hearderTop">
                <a href="">로그인</a>
                <Link to="/mypage">마이페이지</Link>
                <a href="">예약내역</a>
                <a href="">찜 목록</a>
                <a href="">장바구니</a>
            </div>
            <div className="inner">
                <div className="logo-menu">
                    <a className="menu-trigger" href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                    <div className="title_logo">
                        <Link to="/">
                            <img src="/images/GNB_LOGO.png" alt="하나투어 로고" />
                        </Link>
                    </div>
                </div>
                <Search />
            </div>
            <GNB />
        </header>
    );
};

export default Header;
