import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoriesResult2 = () => {
    const [categoryResult, setCategoryResult] = useState([]);
    const { categories } = useParams();
    console.log(categories);
    useEffect(() => {
        const url = `http://localhost:7000/products/search?category=${categories}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCategoryResult(data));
    }, [])
    console.log(categoryResult);
    return (
        <div>
        <h1 className='text-4xl'>Length: {categoryResult.length}</h1>
        </div>
    );
};

export default CategoriesResult2;