import './App.css';
import { Router } from '@reach/router';
import NavigationBar from './components/NavigationBar';
import Featured from './pages/Featured';
import Categories from './pages/Categories';
import Albums from './pages/Albums';
import AlbumDetails from './pages/AlbumDetails';
import Playlists from './pages/Playlists';
import Player from './pages/Player';

function App() {
  return (
    <div className="App">
      <Router>
        <Featured default/>
        <Categories path="/categories" />
        <Albums path="/albums" />
        <AlbumDetails path="/albums/:id" />
        <Playlists path="/playlists" />
        <Player path="/player" />
      </Router>
      <NavigationBar className="navigationBar"/> 
    </div>
  );
}

export default App;
