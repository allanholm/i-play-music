import './App.css';
import { Router } from '@reach/router';
import NavigationBar from './components/NavigationBar';
import Featured from './pages/Featured';
import Categories from './pages/Categories';
import Albums from './pages/Albums';

function App() {
  return (
    <div className="App">
      <Router>
        <Featured path="/"/>
        <Categories path="/categories" />
        <Albums path="/albums" />
      </Router>
      <NavigationBar className="navigationBar"/> 
    </div>
  );
}

export default App;
