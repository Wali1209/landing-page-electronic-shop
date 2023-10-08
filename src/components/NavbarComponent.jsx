import React, { useEffect, useState } from "react";
import LandingPageLogo from "../assets/logo.png";
import { ImSearch } from "react-icons/im";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isScrolled, setScrolled] = useState(false);
  const [isSearching, setSearching] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Navbar
      bg={isScrolled ? "dark" : ""}
      expand="lg"
      variant="dark"
      className={isScrolled ? "scrolled" : ""}
    >
      <Navbar.Brand>
        <img src={LandingPageLogo} alt="Electronic Shop logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link
            href="#home"
            onClick={() => setActiveLink("home")}
            className={activeLink === "home" ? "active" : ""}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#stores"
            onClick={() => setActiveLink("store")}
            className={activeLink === "store" ? "active" : ""}
          >
            Store
          </Nav.Link>
          <Nav.Link
            href="#products"
            onClick={() => setActiveLink("products")}
            className={activeLink === "products" ? "active" : ""}
          >
            Products
          </Nav.Link>
          <Nav.Link
            href="#contact"
            onClick={() => setActiveLink("contact")}
            className={activeLink === "contact" ? "active" : ""}
          >
            Contact
          </Nav.Link>
        </Nav>
        <form action="" className="search-form ms-auto">
          <span className="sign-in">
            <a href="#">Sign In</a>
          </span>
          <input
            type="text"
            name="search"
            id="searchField"
            placeholder="Search..."
            className={isSearching ? "search-active" : ""}
          />
          <ImSearch
            onClick={() => {
              setSearching((current) => !current);
            }}
          />
        </form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
