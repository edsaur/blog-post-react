import styled from "styled-components";

const StyledErrorFallback = styled.div`
height: 100vh;
background:rgb(255, 81, 81);

h1: {
    font-size: 2rem;
    margin-bottom: 1rem;
 }

button: {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 4px;
    border: none;
    background-color:rgb(0, 204, 78);
    color: #fff;
}

p: {
    margin-bottom: 1rem;
    font-size: 2rem;
}
`


export default function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <StyledErrorFallback>
      <h1>Something went wrong:</h1>
      <p>{error?.message || "An error occurred"}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </StyledErrorFallback>
  );
};
