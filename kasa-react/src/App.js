import { React } from "react";
import Home from './pages/Home';
import About from './pages/About';
import AccomodationPage from './pages/AccomodationPage';
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
                <Route path="/about" element={<About />} />
                <Route path="/accomodation/:id" element={<AccomodationPage />} />
                <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
  }
  
  export default App;