import { useState } from "react";

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
            <form onSubmit={onSubmit}>
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