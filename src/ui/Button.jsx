import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: white;
    background-color: #2b4aff; /* Blue */
    
    &:hover {
      background-color: #1a3aff; /* Darker Blue */
    }
  `,
  secondary: css`
    color: #333;
    background: #f4f4f4; /* Light Gray */
    border: 1px solid #ccc;

    &:hover {
      background-color: #e0e0e0;
    }
  `,
  danger: css`
    color: white;
    background-color: #d32f2f; /* Red */

    &:hover {
      background-color: #b71c1c; /* Darker Red */
    }
  `,
  success: css`
    color: white;
    background-color: #388e3c; /* Green */

    &:hover {
      background-color: #2e7d32; /* Darker Green */
    }
  `,
  warning: css`
    color: white;
    background-color: #f57c00; /* Orange */

    &:hover {
      background-color: #ef6c00; /* Darker Orange */
    }
  `,
};

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;

  ${(props) => sizes[props.$sizes]};
  ${(props) => variations[props.$variation]};
`;

Button.defaultProps = {
  $sizes: "medium",
  $variation: "primary",
};

export default Button;
