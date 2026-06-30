import { createGlobalStyle } from "styled-components";

import ggsansNormal from "../../ggsans-Normal.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: "gg sans";
    src: url(${ggsansNormal}) format("truetype");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: "gg sans", "Inter", "Noto Sans", sans-serif;
  }

  body {
    background-color: var(--bg-chat);
  }

  :root {
    --bg-sidebar: #2b2d31;
    --bg-chat: #313338;
    --bg-hover: rgba(78, 80, 88, 0.3);
    --bg-active: rgba(78, 80, 88, 0.6);

    --text-normal: #f2f3f5;
    --text-muted: #949ba4;
    --text-bot-role: #5865f2;

    --status-online: #23a55a;
    --status-idle: #f0b232;
    --status-dnd: #f23f43;
    --status-offline: #80848e;

    --font-ui: "gg sans", "Inter", "Noto Sans", sans-serif;

    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32, 34, 37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;

    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64, 68, 75);
    --symbol: #74777a;

    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;

    --link: #5d80d6;
  }
`;
