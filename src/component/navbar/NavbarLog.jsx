import { useNavigate, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavbarLog = () => {
  const navigate = useNavigate();
  const hasToken = !!localStorage.getItem("token");

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand onClick={() => navigate("/home")}>ShoeStop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {hasToken ? (
            <>
              <Nav className="m-auto">
                <Link to="/home">Home</Link> <Link to="/cart">Cart</Link>
              </Nav>
              <Nav className="mx-5">
                <Button
                  variant="light px-4"
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/login");
                  }}
                >
                  log out
                </Button>
              </Nav>
            </>
          ) : (
            <Nav>
              <Link to="/login">login</Link>
              <Link to="/signup">Signup</Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLog;
