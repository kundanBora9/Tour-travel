import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Tour from './Component/Tour/Tour';
import Home from './Component/Hero/Home';
import Footer from './Component/Footer';
import About from './Component/About/About';
import Contact from './Component/Contact/contact';
import GoldenTri from './Component/GoldenTriangle/GoldenTri';
import Rajeshtan from './Component/Rajeshtan/Rajeshtan-Tour';
import SameDay from './Component/Same-day/SameDay';
import SameDayTrain from './Component/Same-day/SamedayTrain.jsx';
import SameDayTrainJai from './Component/Same-day/samedayTrainJai.jsx';
import SameDayCarJai from './Component/Same-day/samedayCarJai.jsx';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/golden" element={<GoldenTri/>} />
        <Route path='/rajeshtan' element={<Rajeshtan/>}/>
        <Route path='/sameday' element={<SameDay/>}/>
        <Route path='/samedaytrain' element={<SameDayTrain/>}/>
        <Route path='/samedaycarjai' element={<SameDayCarJai/>}/>
        <Route path='/samedaytrainjai' element={<SameDayTrainJai/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;