import "bootstrap/dist/css/bootstrap-grid.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Navbar";
import Navbar from "react-bootstrap/Navbar";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useCarContext } from "./context/CarContext";

function App() {
  const { cars } = useCarContext();

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              className="logo"
              src="/images/0x0-Tesla_Wordmark_20_Black.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav id="Nav.Link" className="me-auto">
              {cars &&
                cars.map((car: string, index: number) => (
                  <li key={index}>
                    {car}
                    <Link to={"/"}></Link>
                  </li>
                ))}
            </Nav>
            <Nav>
              <Link id="Nav.Link" to={"/"}>
                Startsida
              </Link>
              <Link id="Nav.Link" to={"/about"}>
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
