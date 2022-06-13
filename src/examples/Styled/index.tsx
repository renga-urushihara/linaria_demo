import { styled } from "@linaria/react";
import { title } from "../Css";

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Box_ = styled.section`
  padding: 0 10px 0 10px;
  margin: 10px 0 10px 0;
`;

const BoxInner = styled.div`
  padding: 5px;
`;

export const Box = Object.assign(Box_, {
  Inner: BoxInner,
});

// 疑似要素
export const Button = styled.button`
  color: black;

  &:hover {
    color: blue;
  }
`;

// ネスト
export const Thing = styled.div`
  color: black;

  &::after {
    /* .thing::after */
    content: "🌟";
  }

  h3 {
    /* .thing h3 */
    color: tomato;
  }

  .code {
    /* .thing .code */
    color: white;
    background: black;
  }

  & + & {
    /* .thing + .thing */
    background: yellow;
  }

  &.bordered {
    /* .thing.bordered */
    border: 1px solid black;
  }

  .parent & {
    /* .parent .thing */
    color: blue;
  }
`;

export const MediaQueryFontSize = styled.div`
  font-size: 1rem;

  @media (min-width: 600px) {
    font-size: 2rem;
  }
`;

export const Frame = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

const commonTitleStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  opacity: 1,
  minHeight: 360,

  "@media (min-width: 200px)": {
    minHeight: 480,
  },
};

export const Title1 = styled.h1`
  font-size: 16px;

  ${commonTitleStyle}
`;

export const Title2 = styled.h1`
  font-size: 24px;

  ${commonTitleStyle};
`;

export const Relative = styled.div`
  position: relative;
  min-height: 100px;
`;

export const PropsBasedTitle = styled.h1`
  // compute by css vars.
  color: ${(props: any) => (props["primary"] ? "tomato" : "black")};
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: #555;
`;

export const Article = styled.article`
  /* when referring to class names, prepend a dot (.) */
  .${title} {
    font-size: 36px;
  }

  /* when referring to a component, interpolate it as a selector */
  ${Paragraph} {
    font-size: 14px;
    margin: 16px;
  }
`;

export const OverrideButton = styled(Button)`
  color: red;
  font-size: 18px;
  padding: 16px;
`;
