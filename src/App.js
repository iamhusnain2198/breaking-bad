import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/header/header'
import CharacterGrids from './components/character-grid/character-grids'
import SearchBox from './components/search-box/search-box'


function App() {
  const [items, setItems] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setisLoading(false)
    }

    fetchItems();
  }, [query])

  return (
    <div className="App">
      <Header /> 
      <SearchBox getQuery={(q) => setQuery(q)} />
      <CharacterGrids isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
