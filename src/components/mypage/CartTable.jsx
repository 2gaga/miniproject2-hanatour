const CartTable = ({ data, selectedIds, onToggle, onToggleAll }) => {
    if (!data || data.length === 0) {
        return (
            <div className="no-data-box" style={{ padding: '50px', textAlign: 'center' }}>
                <p>해당 항목이 없습니다.</p>
            </div>
        );
    }

    const allChecked = data.every((item) => selectedIds.includes(item.id));

    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" checked={allChecked} onChange={onToggleAll} />
                    </th>
                    <th>상품명</th>
                    <th>여행 날짜</th>
                    <th>상품 금액</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedIds.includes(item.id)}
                                onChange={() => onToggle(item.id)}
                            />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.date}</td>
                        <td>₩{item.price.toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default CartTable;
