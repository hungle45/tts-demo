import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/About/index.tsx';
import HomePage from './pages/Home/index.tsx';

const App = () => {
  return (
    <>
      <BrowserRouter basename="tts-demo/">
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
