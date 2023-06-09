import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Layout = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">EasyMoto</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="produtos">Produtos</Nav.Link>
            <Nav.Link href="produtos2">Produtos</Nav.Link>
            <Nav.Link href="utilizadores">Utilizadores</Nav.Link>
            <Nav.Link href="categorias">Categorias</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Layout
