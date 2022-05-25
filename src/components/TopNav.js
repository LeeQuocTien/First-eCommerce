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

import { Link } from 'react-router-dom';

export default function({cartItems}) {
  const [ toggleIsOpen, setToggle] = useState(false);
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href='/'>
            First-Ecommerce
        </NavbarBrand>
        <NavbarToggler className='me-2'
          onClick={() => setToggle(!toggleIsOpen)} 
        />
        <Collapse isOpen={toggleIsOpen} className="collapse-toggler" navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to={"/signin/"}>
                Register
              </Link>
            </NavItem>          
            <NavItem>
              <Link className="nav-link" to={"/cart/"}>
                Cart({cartItems.length})
              </Link>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}
