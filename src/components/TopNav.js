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
              <NavLink href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signin/">
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/products/">
                Products
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/cartItems/">
                Cart ({0})
              </NavLink>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}
