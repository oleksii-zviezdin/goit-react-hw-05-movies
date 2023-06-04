import styled from '@emotion/styled';

export const SearchButton = styled.button`
  background-color: #afaaff;
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
    background-color: #9e97ff;
  }

  &:focus {
    border-color: #9e97ff;
    box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
    outline: 0;
  }
`;
