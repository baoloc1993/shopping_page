import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { authActions } from "../store/auth";


const NavBar = () => {
  const isLoggedIn =  useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogout(){
    dispatch(authActions.logOut)
    navigate("/login");
  }
  return (
    <Navbar bg="light" variant="light"> 
      <Container>
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <Nav className="me-auto">
          <LinkContainer to="/shop">
            <Nav.Link>Shop</Nav.Link>
          </LinkContainer>
        </Nav>
          <div>
            <h3>BOUTIQUE</h3>
          </div>
        
        <Nav>
          {!isLoggedIn ? <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer> : <></>}
          <LinkContainer to="/cart">
            <Nav.Link>Cart</Nav.Link>
          </LinkContainer>
          {isLoggedIn ? <Button onClick={handleLogout}>Log out</Button> : <></>}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
