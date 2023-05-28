import styled from "@emotion/styled";
import { NavLink, Outlet } from "react-router-dom";
const StyledLink = styled(NavLink)`
    color: black;

    &.active {
        color: orange;
}
`;const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                        <StyledLink to="/">NavLink-Home </StyledLink>
                        </li>
                        <li>
                        <StyledLink to="/movies">NavLink-Movies</StyledLink>
                        </li>
                    </ul>
                </nav>
            <hr />
            </header>
            <Outlet />
        </>
    )
}

export default Layout