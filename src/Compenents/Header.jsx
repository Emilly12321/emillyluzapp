import { Link } from "react-router-dom"; 
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';




function Header() {
    return (
        <Navbar className="bg-body-tertiary ">
            <Container>
                <Navbar.Brand>
                    <Link to="/"> Meu site  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu-site"/>
                <Navbar.Collapse id="menu-site">
                    <Nav>
                        <Nav.Item>
                            <Link className="nav-link" to="/">Inicial</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/Contato">Contato</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/Sobre">Sobre</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/Exercicio">Exercicio</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className="nav-link" to="/Card">Card</Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;