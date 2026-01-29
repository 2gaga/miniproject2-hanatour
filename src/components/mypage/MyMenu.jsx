import { useState } from 'react';
import './style.css';
import Mymy from './Mymy';
import CartTable from './CartTable';
import Pagination from './Pagination';
import usePagination from '../../hooks/usePagination';
import useManage from '../../store/useManage';

const MyMenu = () => {
    const [currentCategory, setCurrentCategory] = useState('package');
    const [activeSecondMenu, setActiveSecondMenu] = useState('찜 목록');
    const [currentSection, setCurrentSection] = useState('cart');
    const [titleText, setTitleText] = useState('찜 목록');

    const {
        packages,
        stays,
        tickets,
        selectedIds,
        toggleSelect,
        selectAll,
        deleteSelected,
        clearSelection,
    } = useManage();

    // 카테고리별 데이터 선택
    const allItems =
        currentCategory === 'package' ? packages : currentCategory === 'stay' ? stays : tickets;

    // 페이지네이션
    const { currentPage, totalPage, currentData, setCurrentPage, goPrev, goNext } = usePagination(
        allItems,
        8
    );

    const handleCategoryChange = (category) => {
        setCurrentCategory(category);
        setCurrentPage(1);
        clearSelection();
    };

    return (
        <div className="inner_mypage">
            <div className="user_info">
                <Mymy />
            </div>

            <div className="my_text">
                <div className="title-line">
                    <h2>마이페이지</h2>
                    <span>{titleText}</span>
                </div>

                <div className="title-bottom">
                    {/* 1차 메뉴 */}
                    <div className="mypage_sec01">
                        <div className="menu_first">
                            <div className="buttonbox">
                                <button>쿠폰·상품권</button>
                                <ul>
                                    <li
                                        onClick={() => {
                                            setTitleText('상품권');
                                            setCurrentSection('coupon');
                                            setActiveSecondMenu('');
                                        }}
                                    >
                                        상품권
                                    </li>
                                    <li
                                        onClick={() => {
                                            setTitleText('기프트카드');
                                            setCurrentSection('coupon');
                                            setActiveSecondMenu('');
                                        }}
                                    >
                                        기프트카드
                                    </li>
                                    <li
                                        onClick={() => {
                                            setTitleText('쿠폰함');
                                            setCurrentSection('coupon');
                                            setActiveSecondMenu('');
                                        }}
                                    >
                                        쿠폰함
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 2차 메뉴 */}
                        <div className="menu_second">
                            <ul>
                                <li
                                    className={activeSecondMenu === '예약내역' ? 'active' : ''}
                                    onClick={() => {
                                        setTitleText('예약내역');
                                        setActiveSecondMenu('예약내역');
                                        setCurrentSection('list');
                                    }}
                                >
                                    <a>예약내역</a>
                                </li>
                                <li
                                    className={activeSecondMenu === '찜 목록' ? 'active' : ''}
                                    onClick={() => {
                                        setTitleText('찜 목록');
                                        setActiveSecondMenu('찜 목록');
                                        setCurrentSection('haet');
                                    }}
                                >
                                    <a>찜 목록</a>
                                </li>
                                <li
                                    className={activeSecondMenu === '장바구니' ? 'active' : ''}
                                    onClick={() => {
                                        setTitleText('장바구니');
                                        setActiveSecondMenu('장바구니');
                                        setCurrentSection('cart');
                                    }}
                                >
                                    <a>장바구니</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 콘텐츠 영역 */}
                    {['list', 'haet', 'cart'].includes(currentSection) ? (
                        <>
                            {/* 3차 메뉴 */}
                            <div className="mypage_sec02">
                                <div className="menu_third">
                                    <div className="menu_left">
                                        <button
                                            className={
                                                currentCategory === 'package' ? 'active' : ''
                                            }
                                            onClick={() => handleCategoryChange('package')}
                                        >
                                            패키지
                                        </button>
                                        <button
                                            className={currentCategory === 'stay' ? 'active' : ''}
                                            onClick={() => handleCategoryChange('stay')}
                                        >
                                            호텔·펜션
                                        </button>
                                        <button
                                            className={currentCategory === 'ticket' ? 'active' : ''}
                                            onClick={() => handleCategoryChange('ticket')}
                                        >
                                            투어·입장권
                                        </button>
                                    </div>

                                    <div className="check_function">
                                        <button
                                            onClick={() => {
                                                selectedIds.length === allItems.length
                                                    ? clearSelection()
                                                    : selectAll(allItems);
                                            }}
                                        >
                                            {selectedIds.length === allItems.length
                                                ? '전체해제'
                                                : '전체선택'}
                                        </button>
                                        <button onClick={() => deleteSelected(currentCategory)}>
                                            선택 삭제
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* 테이블 */}
                            <div className="content">
                                <CartTable
                                    data={currentData}
                                    selectedIds={selectedIds}
                                    onToggle={toggleSelect}
                                    onToggleAll={() => {
                                        selectedIds.length === currentData.length
                                            ? clearSelection()
                                            : selectAll(currentData);
                                    }}
                                />
                            </div>

                            {/* 페이지네이션 */}
                            <Pagination
                                currentPage={currentPage}
                                totalPage={totalPage}
                                onPrev={goPrev}
                                onNext={goNext}
                                onPage={setCurrentPage}
                            />
                        </>
                    ) : (
                        <div className="content">
                            <p>해당 항목이 없습니다.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyMenu;
