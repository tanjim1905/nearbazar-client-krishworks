import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoriesResult3 = () => {
    const [categoryResult, setCategoryResult] = useState([]);
    const { categoryParent } = useParams();
    useEffect(() => {
        const url = `http://localhost:7000/products/child?category=${categoryParent}`;
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

export default CategoriesResult3;