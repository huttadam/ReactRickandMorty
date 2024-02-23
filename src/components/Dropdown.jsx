import React, {useState, useEffect} from 'react'

const Dropdown = () => {
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
    <select onChange={event => setCharacterData(event.target.value)} value={characterData}>
        {characterData.map(char => <option key={char.id} value={char.name}>{char.name}</option>)}
    </select>
  )
}

export default Dropdown