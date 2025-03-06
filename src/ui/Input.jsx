import styled from "styled-components";

const Input = styled.input`
  padding: 12px;
  border: 1px solid #555;
  border-radius: 5px;
  background-color: #222;
  width: 100%;
  color: white;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease-in-out;
  
  /* Default box-shadow */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4); /* Softer green glow */
  }
`;

export default Input;
