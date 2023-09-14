import styled from "styled-components";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledNavElement>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      <StyledLink href="/favorites">Favorites</StyledLink>
    </StyledNavElement>
  );
}

const StyledNavElement = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 4rem;
  background-color: lightblue;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  background-color: lightblue;
  border: 0.5rem solid none;
  color: white;
  padding: 1rem 5rem 1rem 5rem;
`;
