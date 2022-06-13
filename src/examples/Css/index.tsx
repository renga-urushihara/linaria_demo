import { css } from "@linaria/core";

export const title = css`
  font-size: 24px;
  color: black;
`;

export const blue = css`
  color: blue;
`;

export const bloody = css`
  background: red;
`;

export const globals = css`
  :global() {
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    /* @font-face {
      font-family: "MaterialIcons";
      src: url(../assets/fonts/MaterialIcons.ttf) format("truetype");
    } */
  }
`;
