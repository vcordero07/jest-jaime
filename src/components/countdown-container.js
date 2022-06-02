/** @jsx jsx */
import { jsx, css, Flex } from "theme-ui";
import useClock from "use-clock";
import { remainingTime, addPadding } from "../utils/utils";
import CountNumber from "./count-number";

const CountdownContainer = ({
  targetDate,
  hideSeconds,
  hideMinutes,
  hideHours,
  hideDays,
  secondsLabel,
  minutesLabel,
  hoursLabel,
  daysLabel,
}) => {
  const { raw: currentDate } = useClock();
  const isOver = currentDate.isBefore(targetDate);
  const { daysSince, hoursSince, minutesSince, secondsSince } = remainingTime(
    currentDate,
    targetDate
  );
  return (
    <Flex
      css={css({
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "border",
        flexDirection: ["column", "row"],
        "& > *": {
          borderRightWidth: [0, "1px"],
          borderRightStyle: [0, "solid"],
          borderBottomWidth: ["1px", 0],
          borderBottomStyle: ["solid", 0],
          borderColor: "border",
        },
        "& > *:last-child": {
          border: 0,
        },
      })}
    >
      {!hideDays && (
        <CountNumber
          value={addPadding(isOver ? 0 : daysSince)}
          label={daysLabel}
        />
      )}
      {!hideHours && (
        <CountNumber
          value={addPadding(isOver ? 0 : hoursSince)}
          label={hoursLabel}
        />
      )}
      {!hideMinutes && (
        <CountNumber
          value={addPadding(isOver ? 0 : minutesSince)}
          label={minutesLabel}
        />
      )}
      {!hideSeconds && (
        <CountNumber
          value={addPadding(isOver ? 0 : secondsSince)}
          label={secondsLabel}
        />
      )}
    </Flex>
  );
};

export default CountdownContainer;
