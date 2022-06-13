import { render } from "react-dom";
import { bloody, blue, globals, title } from "./examples/Css";
import {
  Article,
  Box,
  Button,
  Frame,
  MediaQueryFontSize,
  OverrideButton,
  Paragraph,
  PropsBasedTitle,
  Relative,
  Thing,
  Title,
  Title1,
  Title2,
} from "./examples/Styled";
import StyledComponent from "./examples/StyledComponent";

window.onload = () => {
  render(Page(), document.getElementById("app")!);
};

function Page() {
  return (
    <Box className={globals}>
      <Title>Hello</Title>
      <Box.Inner>
        <span className={blue}>Hello world</span>
        <div>
          <Button>Hover me!</Button>
        </div>
        <div>
          <Thing className="parent">
            <h3>nested by Thing</h3>
            <Thing className="parent bordered">
              <p>nested here</p>
              <div>
                <span className="code">{`function() {}`}</span>
              </div>
            </Thing>
          </Thing>
        </div>
        <MediaQueryFontSize>
          <div>hoge</div>
        </MediaQueryFontSize>
        <Frame>
          <span>rolling!</span>
        </Frame>
        <Relative>
          <Title1>Title1</Title1>
        </Relative>
        <Relative>
          <Title2>Title2</Title2>
        </Relative>
        <PropsBasedTitle primary>PropsBasedTitle</PropsBasedTitle>
        <Article>
          <h2 className={title}>ArticleTitle</h2>
          <Paragraph>Article Paragraph</Paragraph>
        </Article>
        <OverrideButton>OverrideButton</OverrideButton>
        <StyledComponent className={bloody} height={100} />
      </Box.Inner>
    </Box>
  );
}
