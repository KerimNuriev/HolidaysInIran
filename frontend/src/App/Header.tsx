import React, { useState, memo } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
import { useTranslation } from 'react-i18next';
import { Prev } from 'react-bootstrap/esm/PageItem';
import logo from '../logo.png';
import './Header.scss';
import type { RootState } from '../store';
import { useAppDispatch } from '../store';
import { logout } from '../features/admin/adminSlice';

function Header(): JSX.Element {
  const admin = useSelector((state: RootState) => state.admin.admin);
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const tours = useSelector((state: RootState) => state.tours.toursList);

  const handleLang = (): void => {
    setLang((prev) => (prev === 'ru' ? 'en' : 'ru'));
    i18n.changeLanguage(lang === 'ru' ? 'en' : 'ru');
  };

  const handleLogout = React.useCallback(
    async (event: React.MouseEvent) => {
      event.preventDefault();

      const dispatchResult = await dispatch(logout());
      if (logout.fulfilled.match(dispatchResult)) {
        navigate('/');
      }
    },
    [dispatch, navigate],
  );

  return (
    <div className="header">
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <LinkContainer to="/">
              <Nav.Link>
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
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <LinkContainer to="/">
                    <Nav.Link>{t('Главная')}</Nav.Link>
                  </LinkContainer>
                  <NavDropdown
                    title={t('Туры в Иран')}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    {tours.length > 0 ? (
                      tours.map((tour) => (
                        <React.Fragment key={tour.id} >
                          <LinkContainer to={`/tour/${tour.id}`}>
                            <NavDropdown.Item eventKey={tour.id}>
                              {tour.title}
                            </NavDropdown.Item>
                          </LinkContainer>
                          <NavDropdown.Divider />
                        </React.Fragment>
                      ))
                    ) : (
                      <> </>
                    )}
                    <LinkContainer to="/tour/mytour">
                      <NavDropdown.Item>
                        {t('Индивидуальные туры')}
                      </NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <LinkContainer to="/faq">
                    <Nav.Link>{t('Информация для туристов')}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/contact">
                    <Nav.Link>{t('Контакты')}</Nav.Link>
                  </LinkContainer>
                  {admin && (
                    <>
                      <LinkContainer to="/account">
                        <Nav.Link eventKey={14}>{admin?.userName}</Nav.Link>
                      </LinkContainer>
                      <LinkContainer to="/">
                        <Nav.Link onClick={handleLogout}>Выйти</Nav.Link>
                      </LinkContainer>
                    </>
                  )}

                  <button
                    type="button"
                    className="language"
                    onClick={handleLang}
                  >
                    {lang}
                  </button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default memo(Header);
