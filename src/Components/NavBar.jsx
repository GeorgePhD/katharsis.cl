import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link, Outlet } from 'react-router-dom';
import Nosotros from './Nosotros/Nosotros';
import Logo from '../../public/img/logo30x30.png';
import './navbar.css';
const NavBar = () => {

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <img className='logo' src={Logo} alt="" />
                <Navbar.Brand as={Link} to="/">Katharsis</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">inicio</Nav.Link>
                        <Nav.Link as={Link} to="/Nosotros">nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/Servicios">servicios</Nav.Link>
                        <Nav.Link as={Link} to="/EquipoClave">equipo clave</Nav.Link>
                        <Nav.Link as={Link} to="/CatalogoDeArtistas">catálogo de artistas</Nav.Link>
                        <NavDropdown title="Kaskivano" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/Historia" >Historia</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Discografia" >Discografía</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/Galeria" >Galería</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/Otros" >Otros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>

        </>
    );
}

export default NavBar