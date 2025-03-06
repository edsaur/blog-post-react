import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
  position: sticky;
  top: 0;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    font-weight: bold;
  }
`;

const ProfileLink = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`;

export default function Header() {
  return (
    <Navbar>
      <Logo>Blogpost</Logo>

      {/* ONLY SHOW when USER is LOGGED IN */}
      <NavLinks>
        <NavItem>
          <StyledNavLink to="/">Home</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/create-post">Create Post</StyledNavLink>
        </NavItem>
      </NavLinks>
      <ProfileLink>
        <ProfileImage
          src="https://img.freepik.com/premium-vector/stylish-young-man-suit-profile-silhouette_983093-3786.jpg"
          alt="Profile"
        />
      </ProfileLink>

      {/* SHOW LOGIN/SIGNUP */}
    </Navbar>
  );
}
