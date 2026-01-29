import './style.css';
const Menu = () => {
    return (
        <section className="menu">
            <div className="menu-list">
                <ul>
                    <li>
                        <img src="/images/menu_01.png" alt="하나투어상품권" />
                        <p>하나투어상품권</p>
                    </li>
                    <li>
                        <img src="/images/menu_02.png" alt="마일리지클럽" />
                        <p>마일리지클럽</p>
                    </li>
                    <li>
                        <img src="/images/menu_03.png" alt="하나LIVE" />
                        <p>하나LIVE</p>
                    </li>
                    <li>
                        <img src="/images/menu_04.png" alt="제우스" />
                        <p>제우스</p>
                    </li>
                    <li>
                        <img src="/images/menu_05.png" alt="이벤트" />
                        <p>이벤트</p>
                    </li>
                    <li>
                        <img src="/images/menu_06.png" alt="외국인전용여행" />
                        <p>Foreigner</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Menu;