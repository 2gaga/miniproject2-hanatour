const Product_List = ({ item, current }) => {
    const { id, title, type, desc, price, img, country, geographical, Internal } = item;
    const label = current === 'all' ? type[0] : type.includes(current) ? current : type[0];

    return (
        <li>
            <a href="#">
                <img src={img} alt={title} />
                <div className="text-box01">
                    <p className="card-label">{label}</p>
                    <p className="card-title">{title}</p>
                    <p className="card-exp">{desc}</p>
                    <p className="price">{price}</p>
                </div>
            </a>
        </li>
    );
};

export default Product_List;
