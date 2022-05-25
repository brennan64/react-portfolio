import './NavTabs.scss';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export const NavTabs = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => () => {
    navigate(path || '/');
  };

  return (
    <Nav className="navbar d-flex justify-content-end">
      <Nav.Item onClick={handleNavigate('/home')}>
        <Nav.Link>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={handleNavigate('/about')}>
        <Nav.Link>About</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={handleNavigate('/portfolio')}>
        <Nav.Link>Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={handleNavigate('/resume')}>
        <Nav.Link>Resume</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={handleNavigate('/contact')}>
        <Nav.Link>Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
