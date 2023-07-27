import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavbarLog() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">ShoeStop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        {/* <Nav.Link href="/fav">Favourites</Nav.Link> */}
                        <Nav.Link href="/cart">Cart</Nav.Link>
                       
                    </Nav>
                    <Nav className="mx-5">
                    <Button variant="light px-4" href='/login'>log out</Button>               
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarLog;