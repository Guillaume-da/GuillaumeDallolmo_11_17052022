import { React } from "react";
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';
import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
    const location = useLocation();

    return (
        <div>
            <Header />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
  }
  
  export default App;