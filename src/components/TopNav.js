import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container } from 'reactstrap';

export default function() {
  const [ toggleIsOpen, setToggle] = useState(false);
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={() => setToggle(!toggleIsOpen)} />
        <Collapse isOpen={toggleIsOpen} className="collapse-toggler" navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={"/signin/"}>
                Sign In
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={"/products/"}>
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={"/cart/"}>
                Cart ({0})
              </NavLink>
            </Item>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}
