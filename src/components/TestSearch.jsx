import React, { useState, useEffect } from 'react';

const TestSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [characterData, setCharacterData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
                const data = await response.json();
                setCharacterData(prevData => [...prevData, ...data.results]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchCharacters();
    }, [currentPage]);

    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <div classNameName='TestSearch'>
            <input type="text" placeholder='Search...' onChange={event => { setSearchTerm(event.target.value) }} />
            {characterData.filter(val => {
                if (searchTerm === "") {
                    return val;
                } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
            }).map((val, key) => (
                <div key={key}>{val.name}</div>
            ))}
            <button onClick={handleLoadMore}>Load More</button>
        </div>
    );
};

export default TestSearch;
