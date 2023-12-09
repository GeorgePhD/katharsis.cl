import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

    return (

        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Katharsis.cl</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">inicio</Nav.Link>
                        <Nav.Link href="#link">nosotros</Nav.Link>
                        <NavDropdown title="Kaskivano" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Historia</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Discografía</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Gallería</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar