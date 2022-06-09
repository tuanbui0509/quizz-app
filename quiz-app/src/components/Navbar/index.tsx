// import { menus } from 'constants/menus';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

interface MenuElement {
  label: string;
  to: string;
}

const menus: Array<MenuElement> = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Category',
    to: '/category',
  },
  {
    label: 'Quiz Online',
    to: '/quiz',
  },
  {
    label: 'About',
    to: '/about',
  },
];
// custom Link
function MenuLink(children: MenuElement) {
  const location = useLocation();
  const match = location.pathname === children.to;
  let active = match ? 'active' : '';
  console.log(match);
  console.log(children);
  return (
    <Link to={children.to} className={`nav-link ${active}`}>
      {children.label}
    </Link>
  );
}

const Menu = () => {
  //   const user = JSON.parse(localStorage.getItem('User'));
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/">LOGO QUIZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {showMenus(menus)}
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const showMenus = (menus: Array<MenuElement>) => {
  let result = null;
  if (menus.length > 0) {
    result = menus.map((menu: MenuElement, index: number) => {
      return <MenuLink key={index} to={menu.to} label={menu.label} />;
    });
  }
  return result;
};

export default Menu;
