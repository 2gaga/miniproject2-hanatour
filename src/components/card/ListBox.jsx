import Product_List from './Product_List';

const ListBox = ({ data, current }) => {
    return (
        <ul className="product-list">
            {data.slice(0, 4).map((item) => (
                <Product_List key={item.id} item={item} current={current} />
            ))}
        </ul>
    );
};

export default ListBox;
