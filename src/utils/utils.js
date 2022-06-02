import moment from "moment";

export const remainingTime = (targetDate, currentDate) => {
  const remainingDays = moment(currentDate).diff(targetDate, "days");
  const remainingHours = moment(currentDate)
    .subtract(remainingDays, "days")
    .diff(targetDate, "hours");
  const remainingMinutes = moment(currentDate)
    .subtract(remainingDays, "days")
    .subtract(remainingHours, "hours")
    .diff(targetDate, "minutes");
  const remainingSeconds = moment(currentDate)
    .subtract(remainingDays, "days")
    .subtract(remainingHours, "hours")
    .subtract(remainingMinutes, "minutes")
    .diff(targetDate, "seconds");
  // return { remainingDays, remainingHours, remainingMinutes, remainingSeconds };
  let daysSince = Math.abs(remainingDays);
  let hoursSince = Math.abs(remainingHours);
  let minutesSince = Math.abs(remainingMinutes);
  let secondsSince = Math.abs(remainingSeconds);

  return { daysSince, hoursSince, minutesSince, secondsSince };
};

export const addPadding = (value) => (value < 10 ? "0" + value : value);
