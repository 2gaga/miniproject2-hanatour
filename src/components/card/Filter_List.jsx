import FilterButton from './FilterButton';

const Filter_List = ({ filters, current, onChange }) => {
    return (
        <ul className="filter-list">
            {filters.map((item) => (
                <FilterButton
                    key={item.value}
                    item={item}
                    active={current === item.value}
                    onSelect={onChange}
                />
            ))}
        </ul>
    );
};

export default Filter_List;
