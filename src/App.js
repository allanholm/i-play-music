import './App.css';
import { Router } from '@reach/router';
import NavigationBar from './components/NavigationBar';
import Featured from './pages/Featured';
import Categories from './pages/Categories';

function App() {
  return (
    <div className="App">
      <Router>
        <Featured path="/"/>
        <Categories path="/categories" />
      </Router>
      <NavigationBar className="navigationBar"/> 
    </div>
  );
}

export default App;
