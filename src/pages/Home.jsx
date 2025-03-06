import styled from "styled-components";
import Posts from "./Posts";

const StyledHome = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
margin-top: 20px;

#title {
  margin-left: 30px;
}
`;

export default function Home() {
  return (
    <StyledHome>
    <h1 id="title">Check out some trending blogs!</h1>
      {/* Insert here all queried posts */}
      <Posts/>
    </StyledHome>
  );
};
