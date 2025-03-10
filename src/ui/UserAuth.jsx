import { Outlet } from "react-router";
import styled from "styled-components";

const UserAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function UserAuth() {
  return (
    <UserAuthContainer>
      <Outlet />
    </UserAuthContainer>
  );
};
