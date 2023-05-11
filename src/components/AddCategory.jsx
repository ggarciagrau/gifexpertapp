import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        let cleanInputValue = inputValue.trim();
        if (!cleanInputValue.length) return;
        onNewCategory(cleanInputValue);
        setInputValue('');
        // setCategories(categories => [inputValue, ...categories]);
    }

    return (
        <div>
            <form onSubmit={onSubmit} aria-label="form">
                <input
                    type="text"
                    placeholder="Search gifs..."
                    value={inputValue}
                    onChange={onChange}
                />
            </form>
        </div>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}