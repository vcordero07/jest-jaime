import React from "react";
import { Styled } from "theme-ui";

const MainHeader = () => (
  <Styled.h1>
    How long since we told Jaime to watch: <br /> <br />
    <a
      href="https://www.imdb.com/title/tt6710474/"
      className="title-link"
      target="_blank"
    >
      Everything Everywhere All at Once
    </a>
  </Styled.h1>
);

export default MainHeader;
