/** @jsx jsx */
import { jsx, css } from "theme-ui";
import { FaLaughSquint } from "react-icons/fa";
const Credits = () => (
  <div
    css={css({
      alignSelf: "center",
      fontSize: 0,
      "& > a": {
        fontWeight: "bold",
        textDecoration: "none",
        color: "primary",
      },
    })}
  >
    with <FaLaughSquint /> by friends
  </div>
);

export default Credits;
