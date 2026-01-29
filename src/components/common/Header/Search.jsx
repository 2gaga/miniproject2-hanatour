import { useState } from 'react';
import './Header.css';

const Search = ({ onSearch }) => {
    const [text, setText] = useState('');

    const changeInput = (e) => {
        const { value } = e.target;
        setText(value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(text);
    };

    return (
        <form className="search-wrapper" onSubmit={onSubmit}>
            <fieldset className="search-field">
                <input
                    id="search-input"
                    placeholder="어디로 떠나고 싶으신가요?"
                    value={text}
                    onChange={changeInput}
                />
                <button type="submit" className="btn-search">
                    <img src="/images/search_icon.png" alt="검색" />
                </button>
            </fieldset>
        </form>
    );
};

export default Search;
