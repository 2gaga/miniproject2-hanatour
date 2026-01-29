import './sec05.css';

const Sec05 = () => {
    const benefitData = [
        {
            id: 1,
            img: '/images/con5_01.png',
            sub: '삼성카드',
            title: '하나투어 X 삼성카드 결제혜택',
            alt: '하나투어와 삼성카드 주휴 결제혜택'
        },
        {
            id: 2,
            img: '/images/con5_02.png',
            sub: '4대 면세 쇼핑 혜택',
            title: '롯데/신라/신세계/현대백화점',
            alt: '롯데,신라,신세계,현대 백화점 면세 쇼핑 혜택'
        },
        {
            id: 3,
            img: '/images/con5_03.png',
            sub: '인천 공항철도 할인 혜택',
            title: '공항가는 길',
            alt: '인천 공항철도 할인 혜택'
        },
        {
            id: 4,
            img: '/images/con5_04.png',
            sub: '3대 무료혜택',
            title: '포켓 와이파이',
            alt: '포켓 와이파이 3대 무료혜택'
        }
    ];

    return (
        <section className="section5"> 
            <div className="inner">
                <h2>쏠쏠한 혜택 하나투어가 한 번 더 알려드려요</h2>
                <ul>
                    {benefitData.map((item) => (
                        <li key={item.id}>
                            <img src={item.img} alt={item.alt} />
                            <p className="sub">{item.sub}</p>
                            <p className="title">{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Sec05;