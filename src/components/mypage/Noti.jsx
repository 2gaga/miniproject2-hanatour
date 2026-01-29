import './style.css';

const Noti = () => {
    return (
        <div className="noti">
            <div className="user_point">
                <div className="title_wrapper">
                    <div className="noti_title">
                        <h3>알림</h3>
                        <img src="/images/bell.png" alt="알림" />
                    </div>
                    <span className="badge_dot"></span>
                </div>
            </div>
        </div>
    );
};

export default Noti;
