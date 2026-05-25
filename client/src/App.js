import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fibonacci Calculator</h1>
          <nav className="App-nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/other">
              Other Page
            </NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Fib />} />
            <Route path="/other" element={<OtherPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
