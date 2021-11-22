
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = (props) => {

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Piano8283</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/practices">Practices</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )

};

export { Header };
