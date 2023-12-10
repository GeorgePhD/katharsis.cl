
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
      <h1 className='info'>Importante: <br /> el sitio tendrá estilos básicos y serán modificados a medida que vamos hablando y poniéndonos de acuerdo. Por ahora el foco es la estructura y una vez finalizada esta, le damos estilos. Las imágenes cargan lento por ahora, esto cambiará cuando las optimicemos. El menú funciona ya. El sitio web deberá ser visto desde un notebook por ahora ya que los estilos de celular se harán una vez terminados los estilos para notebook.</h1>
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
