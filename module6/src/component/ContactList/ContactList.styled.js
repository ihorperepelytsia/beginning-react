import styled from "styled-components";
export const List = styled.ul`
  list-style-type: circle;
`;
export const Items = styled.li`
  display: flex;
  margin: 8px;
`;
export const Text = styled.p`
  min-width: 175px;
  margin: 0;
`;
export const Button = styled.button`
  width: max-content;
  margin-left: 16px;
  border: none;
  color: white;
  background-color: blue;
  padding: 4px;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    margin-left: 4px;
  }
`;
