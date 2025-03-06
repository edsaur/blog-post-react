import styled from "styled-components";
import UserSignup from "../features/auth/UserSignup";

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const FormContainer = styled.div`
  background-color: rgb(110, 110, 110);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;



export default function Signup() {
  return (
    <StyledSignUp>
      <FormContainer>
        <Title>Sign Up to Blog</Title>
        <UserSignup />

      </FormContainer>
    </StyledSignUp>
  );
}
