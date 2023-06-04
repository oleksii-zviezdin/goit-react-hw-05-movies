import { Outlet } from 'react-router-dom';
import { Header, StyledLink, ListItem, NavList } from './Layout.styled';
const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <ListItem>
              <StyledLink to="/">Home </StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/movies">Movies</StyledLink>
            </ListItem>
          </NavList>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
