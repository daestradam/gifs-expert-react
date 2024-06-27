import {useState} from 'react';
import {AddCategory} from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
    const onAddCategory = (newCategory) => {
        const category = newCategory.toUpperCase();
        if( categories.includes(category) ) return;
        setCategories([ ...categories, category ]);
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                onNewCategory={onAddCategory}
            />

            {/* listado de Gif */}
            <ol>
                {categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    )
}
