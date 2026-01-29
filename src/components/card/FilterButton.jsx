const FilterButton = ({ item, active, onSelect }) => {
    const { label, value, imgDefault, imgActive } = item;

    return (
        <li>
            <button
                type="button"
                className={`filter-btn ${active ? 'is-active' : ''}`}
                onClick={() => onSelect(value)}
            >
                {imgDefault && <img src={active ? imgActive : imgDefault} alt={label} />}
                <span>{label}</span>
            </button>
        </li>
    );
};

export default FilterButton;
