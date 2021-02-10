import styled from "styled-components";

export const Button = styled.button`
  background: black;
  color: #fff;
  padding: 9px 36px;
  border-radius: 4px;
  font-size: 25px;
  font-weight: 300;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s;
  &:hover {
    background-color: #444;
  }
`;

export default Button;
