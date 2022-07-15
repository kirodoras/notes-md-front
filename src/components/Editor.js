import styled from "styled-components";
import { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

export default function Editor() {
  const [value, setValue] = useState("**Hello world!!!**");
  const [height, SetHeight] = useState(200);

  useEffect(() => {
    const heigthScreen = window.screen.height;
    console.log(heigthScreen);
    const heightEditor = (heigthScreen * 80) / 100;
    console.log(heightEditor);
    SetHeight(heightEditor);
  }, [window.screen.height]);

  return (
    <EditorStyled data-color-mode="dark">
      <MDEditor
        value={value}
        onChange={setValue}
        height={height}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
    </EditorStyled>
  );
}

const EditorStyled = styled.main`
  width: 100%;
  max-width: 100%;
`;
