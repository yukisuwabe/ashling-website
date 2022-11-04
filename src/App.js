import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/Navbar';
import { Home } from './pages/index';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='' exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
