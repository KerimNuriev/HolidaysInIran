import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  NavItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import logo from '../logo.png';
import './Header.scss';
import type { RootState } from '../store';

function Header(): JSX.Element {
  const admin = useSelector((state: RootState) => state.admin.admin);

  const tours = useSelector((state: RootState) => state.tours.toursList)



  return (
    <div className="header">
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <LinkContainer to="/">
              <Nav.Link eventKey={11}>
                <img src={logo} className="logo" alt="logo" />
              </Nav.Link>
            </LinkContainer>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/">
                    <Nav.Link eventKey={12}>Главная</Nav.Link>
                  </LinkContainer>
                  <NavDropdown
                    title="Туры в Иран"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {tours.length > 0 ? 
                    tours.map((tour) => 
                    <>
                    <LinkContainer key={tour.id} to={`/tour/${tour.id}`}>
                    <NavDropdown.Item eventKey={tour.id}>
                      {tour.title}
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider /> 
                  </>)
                  :
                  <></>
                  }                    
                    <LinkContainer to="/mytour">
                      <NavDropdown.Item eventKey={13}>
                        Индивидуальные туры
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <LinkContainer to="/faq">
                    <Nav.Link>Информация для туристов</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link>Контакты</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/">
                    <Nav.Link eventKey={14}>{admin?.userName}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link>
                      <span className="language">Ru</span>
                    </Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
