import Search from './Search';
import GNB from './GNB';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="hearderTop">
                <span>로그인</span>
                <Link to="/mypage">마이페이지</Link>
                <span>예약내역</span>
                <span>찜 목록</span>
                <span>장바구니</span>
            </div>
            <div className="inner">
                <div className="logo-menu">
                    <div className="menu-trigger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
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
