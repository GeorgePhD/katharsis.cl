
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import InicioContent from './Components/InicioContent/InicioContent';
import InicioImagesContainer from './Components/InicioImagesContainer/InicioImagesContainer';
import NavBar from './Components/NavBar';
import Nosotros from './Components/Nosotros/Nosotros';
import CatalogoDeArtistas from './Components/CatalogoDeArtistas/CatalogoDeArtistas';
import Servicios from './Components/Servicios/Servicios';
import EquipoClave from './Components/EquipoClave/EquipoClave';
import Historia from './Components/Historia/Historia';
import Discografia from './Components/Discografia/Discografia';
import Galeria from './Components/Galeria/Galeria';
import Otros from './Components/Otros/Otros';

function App() {
  

  return (
    <>
    
      <BrowserRouter>
      <NavBar />
        <Routes>

            <Route path="/" element={<NavBar />} />
            <Route index element={<InicioContent />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/EquipoClave" element={<EquipoClave />} />
            <Route path="/CatalogoDeArtistas" element={<CatalogoDeArtistas />} />
            <Route path="/Historia" element={<Historia />} />
            <Route path="/Discografia" element={<Discografia />} />
            <Route path="/Galeria" element={<Galeria />} />
            <Route path="/Otros" element={<Otros />} />

            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
        
      <Footer />
    </>
  )
}

export default App
