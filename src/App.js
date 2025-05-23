import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './components/Layout/MainLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<MainLayout />} >
         
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
