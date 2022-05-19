import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    font-family: "Pretendard", "돋움", sans-serif;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    :visited {
      color: #000000;
    }
  }

  /* Pretendard */

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-display: swap;
    src: local("Pretendard Bold"),
      url("/fonts/Pretendard-Bold.subset.woff2") format("woff2"),
      url("/fonts/woff-subset/Pretendard-Bold.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    font-display: swap;
    src: local("Pretendard SemiBold"),
      url("/fonts/Pretendard-SemiBold.subset.woff2") format("woff2"),
      url("/fonts/woff-subset/Pretendard-SemiBold.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    font-display: swap;
    src: local("Pretendard Medium"),
      url("/fonts/Pretendard-Medium.subset.woff2") format("woff2"),
      url("/fonts/woff-subset/Pretendard-Medium.subset.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-display: swap;
    src: local("Pretendard Regular"),
      url("/fonts/Pretendard-Regular.subset.woff2") format("woff2"),
      url("/fonts/woff-subset/Pretendard-Regular.subset.woff") format("woff");
  }
`;
