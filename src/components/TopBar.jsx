import instacartlogo from "../embedded/logo.svg";
import { Navbar, Button, Nav } from "react-bootstrap";

export default function TopBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Navbar.Brand
        style={{
          margin: "5px 0 0 20px",
        }}
        href="#home"
      >
        <img src={instacartlogo} alt="Instacart Logo"></img>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav ClassName="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="#LogIn">Log In</Nav.Link>
          <Button variant="success">Sign Up</Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
