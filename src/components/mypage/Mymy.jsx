import { useState } from 'react';
import Noti from './Noti';
import './style.css';

const Mymy = () => {
    const [isNotiOpen, setIsNotiOpen] = useState(false);
    const toggleNoti = () => {
        setIsNotiOpen(!isNotiOpen);
    };
    return (
        <div className="inner_mypage_side">
            <div className="Profile_card">
                <div className="Profile_name">
                    <img src="/images/mypage_Profile.png" alt="프로필 사진" />
                    <h3>OOO님</h3>
                </div>
                <div onClick={toggleNoti} style={{ cursor: 'pointer' }}>
                    <Noti />
                </div>
                <div className="user_point">
                    <p>마일리지</p>
                    <div className="count_point">
                        <p className="point_value">610</p>
                        <p className="point_unit">점</p>
                    </div>
                </div>
                <div className="user_point">
                    <p>여행내역</p>
                    <div className="count_point">
                        <p className="point_value">7</p>
                        <p className="point_unit">건</p>
                    </div>
                </div>
                <button>개인정보 수정</button>
            </div>
            {isNotiOpen && (
                <div className="NotionBox">
                    <div className="NotionBox_title">
                        <span>🔔 최근 알림</span>
                    </div>
                    <div className="NotionBox_detail">
                        <p>마일리지가 100점 적립되었습니다.</p>
                        <p>예약하신 패키지 여행 D-3입니다!</p>
                        <p>새로운 특가 상품이 등록되었습니다.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Mymy;
