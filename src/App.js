import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import MainLayout from './components/Layout/MainLayout';
import { Home } from './pages/Home';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/' exact element={<MainLayout />} >
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
