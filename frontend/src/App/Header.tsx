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
import './Header.scss';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

function Header(): JSX.Element {
  const admin = useSelector((state: RootState) => state.admin.admin);

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <LinkContainer to="/">
              <Nav.Link eventKey={1}>Logo</Nav.Link>
            </LinkContainer>
            {admin ? (
              <>
                <LinkContainer to="/">
                  <Nav.Link eventKey={80}>{admin?.userName}</Nav.Link>
                </LinkContainer>
                <Button type="button">Выход</Button>
              </>
            ) : (
              <></>
            )}

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/">
                    <Nav.Link eventKey={2}>Home</Nav.Link>
                  </LinkContainer>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <LinkContainer to="/tour8">
                      <NavDropdown.Item eventKey={3}>
                        8 days tour
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/tour10">
                      <NavDropdown.Item eventKey={4}>
                        10 days tour
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to="/mytour">
                      <NavDropdown.Item eventKey={5}>
                        Create my tour
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <LinkContainer to="/faq">
                    <Nav.Link>Information</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
