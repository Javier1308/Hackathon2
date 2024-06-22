import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useState, useEffect, useRef } from 'react';

import fetchPaginacion from '../service/api';

const InfiniteScrollProductList = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetchPaginacion(page);
            const data = await response.json();
            setItems(prevItems => [...prevItems, ...data]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="infinite-scroll-container">
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true}
                loader={<p className="loading">Loading...</p>}
                endMessage={<p className="end-message">No more data to load.</p>}
            >
                <ul className="item-list">
                    {items.map(item => (
                        <li key={item.asin} className="item">
                            <img src={item.image} alt={item.title} className="item-image" />
                            <div className="item-details">
                                <span className="item-title">{item.title}</span>
                                {item.isBestSeller && <span className="item-bestseller">Best Seller</span>}
                                <span className="item-price">${item.price}</span>
                                <span className="item-stars">{item.stars} stars</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </InfiniteScroll>
            {error && <p className="error-message">Error: {error.message}</p>}
        </div>
    );
}

export default InfiniteScrollProductList