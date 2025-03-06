import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  border: none;
  background-color: rgb(0, 204, 78);
  color: #fff;
  cursor: pointer;
`;

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <Heading>404</Heading>
      <Message>Oops! The page you are looking for does not exist.</Message>
      <Button onClick={() => navigate('/')}>Go Home</Button>
    </Container>
  );
}
