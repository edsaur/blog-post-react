import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const Text = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const StyledLink = styled.a`
  color: #2b4aff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export default function UserSignup() {
  return (
    <>
      <Form>
        <FormRow>
          <Input type="username" placeholder="Username" />
        </FormRow>

        <FormRow>
          <Input type="email" placeholder="Email" />
        </FormRow>

        <FormRow>
          <Input type="password" placeholder="Password" />
        </FormRow>
      </Form>
      <Text>
        Already have an account? <StyledLink href="/login">Login</StyledLink>
      </Text>
      <Button type="submit" $variation="success">
        Sign Up
      </Button>
    </>
  );
}
