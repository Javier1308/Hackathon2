import InfiniteScroll from 'react-infinite-scroll-component';
import React, { useState, useEffect, useRef } from 'react';

import fetchPaginacion from '../service/api';

const InfiniteScroll = () => {
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
        <div>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchData}
                hasMore={true}
                loader={<p>Loading...</p>}
                endMessage={<p>No more data to load.</p>}
            >
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </InfiniteScroll>
            {error && <p>Error: {error.message}</p>}
        </div>
    );
}

export default InfiniteScroll