import React, { useState, useEffect } from 'react';
import { fetchPaginacion } from '../service/api';

const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchPaginacion(page);
    }, [page]);

    const fetchItems = async (pageNumber) => {
        setLoading(true);
        const response = await fetchPaginacion();
        const data = await response.json();
        setItems(prevItems => [...prevItems, ...data]);
        setLoading(false);
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || loading) return;
        setPage(prevPage => prevPage + 1);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading]);

    return (
        <div>
            {items.map(item => (
                <div key={item.id} className="item">
                    {item.name}
                </div>
            ))}
            {loading && <p>Loading...</p>}
        </div>
    );
};

export default InfiniteScroll;
