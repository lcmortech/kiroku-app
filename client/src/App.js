import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult'
import ListContainer from './components/ListContainer';


function App() {
const [title, setTitle] = useState('')
const [id, setId] = useState(0)

useEffect(async()=>{
  const res = await fetch(``)
  const data = await res.json()

  data.slice(0,4)
},[])

  return (
    <div className="App">
      <SearchBar />
      <SearchResult />
      <ListContainer />
    </div>
  );
}

export default App;
