export function getDatesByMon({ year, mon }) {
  let days;
  switch (mon) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
      break;
    default:
  }

  const Dates = Array(days)
    .fill(0)
    .map((_, i) => i + 1);

  let tap = new window.Date(year, mon - 1, 1).getDay() - 1;
  if (tap < 0) {
    tap = 6;
  }

  for (let i = 0; i < tap; i++) {
    Dates.unshift(-1);
  }
  console.log(Dates);
  return Dates;
}
