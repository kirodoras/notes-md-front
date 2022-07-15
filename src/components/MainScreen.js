import styled from "styled-components";
import Header from "./Header";
import Editor from "./Editor";

export default function MainScreen() {
  return (
    <MainStyled>
      <Header />
      <Editor />
    </MainStyled>
  );
}

const MainStyled = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  background-color: #0d1117;
`;
