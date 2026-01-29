import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="inner">
                <div className="footer-logo">
                    <img src="/images/Footer_LOGO.png" alt="하나투어 로고" />
                </div>
                <div className="footer-high">
                    <div className="footer-left">
                        <ul className="footer-policy">
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    회사소개
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    이용약관
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    개인정보처리방침
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    여행약관
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    해외여행자보험
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    마케팅제휴
                                </a>
                            </li>
                            <li>
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    공식인증예약센터 검색
                                </a>
                            </li>
                        </ul>
                        <div className="footer-info">
                            <div className="company-info">
                                <p>대표 : 송미선</p>
                                <p>주소 : 서울특별시 종로구 인사동 5길 41</p>
                                <p>사업자등록번호 : 102-81-39440</p>
                                <strong className="underline">사업자정보확인</strong>
                            </div>
                            <div className="company-number">
                                <p>통신판매업신고번호 : 종로01-1806호</p>
                                <p>관광사업자 등록번호 : 제1993호-000006호</p>
                                <p>등록관청 : 서울특별시 종로구청</p>
                                <p>개인정보 보호책임자 : 전준형</p>
                                <p>영업보증공제 15억 1천만원 가입 | 기획여행보증공제 7억원 가입</p>
                            </div>
                            <div className="cs-info">
                                <p>고객센터 1577-1233</p>
                                <p>해외항공권 문의 1899-1833</p>
                                <p>팩스 02-734-0392</p>
                                <strong className="underline1">이메일 15771233@hanatour.com</strong>
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <strong>하나은행 구매안전 서비스</strong>
                        <p>
                            고객님은 안전거래를 위해 현금으로 결제시
                            <br />
                            (주)하나투어에서 가입한 하나은행으로
                            <br />
                            구매안전서비스를 이용하실 수 있습니다
                        </p>
                        <span>서비스 가입사실 확인</span>
                    </div>
                </div>
                <div className="footer-notice">
                    <p>
                        ※ 부득이한 사정에 의해 여행일정이 변경될 경우 사전 동의를 받습니다.
                        <br />※ 하나투어는 통신판매중개자의 지위를 가집니다.
                    </p>
                    <p className="copyright">
                        COPYRIGHTⓒ HANATOUR SERVICE INC. ALL RIGHTS RESERVED
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
