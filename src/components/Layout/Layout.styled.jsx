import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 10px;
`;

export const StyledLink = styled(NavLink)`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  padding: 8px 10px 8px 10px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 100px;

  &:hover {
    background-color: #f7fafa;
  }

  &:focus {
    border-color: #008296;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orange;
  }
`;
export const NavList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ListItem = styled.li`
  /* list-style: none; */
`;
