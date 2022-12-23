import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dogo']);

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;

        setCategories([value, ...categories])
        // setCategories(['Birbo', ...categories]);
    };

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={onAddCategory}
            // setCategories={setCategories}
            />

            {/* Gif list */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

            {/* Gif item */}
        </>
    );
}