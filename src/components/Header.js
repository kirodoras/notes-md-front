import styled from "styled-components";
import { IoFolder } from "react-icons/io5";

export default function Header() {
  return (
    <HeaderStyled>
      <span>
        <IoFolder />
      </span>
      <div>
        <h1>notes.md</h1>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 8%;
  background-color: #0d1117;
  padding: 0 1rem 0 1rem;

  svg {
    color: #c9d1d9;
    font-size: 2rem;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: 1.6rem;
    margin-left: 0.7rem;
    color: #c9d1d9;
  }
`;
