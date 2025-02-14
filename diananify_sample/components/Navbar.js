import Link from "next/link";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" bg="white" variant="light" className="shadow-sm py-3">
      <Container className="d-flex justify-content-between align-items-center">
        
        {/* Left Side: Logo */}
        <Navbar.Brand as={Link} href="/" className="fw-bold fs-3 text-uppercase">
          DIANANIFY
        </Navbar.Brand>

        {/* Center: Search Bar */}
        <Form className="d-flex mx-auto w-50">
          <FormControl
            type="search"
            placeholder="Search products..."
            className="me-2"
          />
          <Button variant="dark">Search</Button>
        </Form>

        {/* Right Side: Links & Cart */}
        <div className="d-flex align-items-center">
          <Nav className="me-4">
            <Nav.Link as={Link} href="/" className="fw-semibold">Home</Nav.Link>
            <Nav.Link as={Link} href="/shop" className="fw-semibold">Shop</Nav.Link>
            <Nav.Link as={Link} href="/about" className="fw-semibold">About</Nav.Link>
          </Nav>

          {/* Cart Icon */}
          <Link href="/cart" className="fs-4 text-dark">
            <i className="bi bi-cart"></i>
          </Link>
        </div>

      </Container>
    </Navbar>
  );
}
