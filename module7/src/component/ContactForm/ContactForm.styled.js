import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 4px;
`;
export const Input = styled.input`
  width: 200px;
  padding: 5px;
  border: 1px solid grey;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const Button = styled.button`
  margin-top: 10px;
  width: 70px;
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
`;
