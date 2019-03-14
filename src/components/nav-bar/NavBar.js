import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import logo from "assets/images/logo/four-sixes-logo-with-text[250x100].svg";
import "./style.scss";

class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.closeNavbar = this.closeNavbar.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      isOpen: false
    };
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNavbar() {
    this.setState({
      isOpen: false
    });
  }

  handleClickOutside(event) {
    const t = event.target;
    if (this.state.isOpen && !t.classList.contains("navbar-toggler")) {
      this.closeNavbar();
    }
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <Link to="/" onClick={this.closeNavbar}>
            <img
              src={logo}
              alt="Four Sixes Logo"
              className="navbar-brand__logo"
            />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/products" onClick={this.closeNavbar}>
                  Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/history" onClick={this.closeNavbar}>
                  History
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" onClick={this.closeNavbar}>
                  About
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default CustomNavbar;
