import { useNavigate, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function CollapsibleExample() {
    const navigate = useNavigate();
   
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand onClick={()=>navigate("/home")}>ShoeStop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Link to="/home">Home</Link>
                        <Link to="/cart">Cart</Link>
                       
                    </Nav>
                    <Nav>
                    <Button variant="light px-4" href='/login'>login</Button>
                    <Button variant="outline-light px-4" href='/signup'>Signup</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;