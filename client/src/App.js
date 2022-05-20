import logo from './logo.svg';
import './App.css';
import {useState, useeffect} from 'reacts'


function App() {
const [title, setTitle] = useState('')
const [id, setId] = useState(0)

  return (
    <div className="App">
      <SearchBar />
      <SearchResult />
      <ListContainer />
    </div>
  );
}

export default App;
