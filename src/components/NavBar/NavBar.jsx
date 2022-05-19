//import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

// Forma correcta de importar 
import  Container from 'react-bootstrap/Container'
import  Nav  from 'react-bootstrap/Nav'
import  Navbar  from 'react-bootstrap/Navbar'
import  NavDropdown  from 'react-bootstrap/NavDropdown'
import CartWidget from '../CartWidget/CartWidget'
import { BsCart4 } from "react-icons/bs";
import '../NavBar/NavBar.css'


import logo from '../images/logo.png';

const array = [
    {idCategoria: '1', name: 'remeras', nameButton: 'Remeras'},
    {idCategoria: '2', name: 'gorras', nameButton: 'Gorras'}
    // {idCategoria: '3', name: 'pantalon', nameButton: 'Pantalones'},
]

const NavBar = () => {
    return (
        
        <Navbar  collapseOnSelect expand="lg" variant="dark">
            <Container>
            
                <Navbar.Brand href="#home"><img className="header__logo"src= { logo } alt="logo"/> ShaggieBurguer</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                        <Nav.Link href="#features">Milanesa</Nav.Link>
                        <Nav.Link href="#pricing">Lomos</Nav.Link>
                        <NavDropdown title="Hambuerguesa" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Clasica</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Cheddar</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Doble</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Triple</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Cuadruple</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contactos</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
                <h3> < BsCart4 /> </h3>
            </Container>
        </Navbar>
    )
}

export default NavBar