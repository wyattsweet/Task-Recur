const date = new Date();

function postNewDay() {
  const calDate = date.getDate();
  const month = date.getMonth();
  localStorage.setItem('dayOfWeek', JSON.stringify({ month, date: calDate }));
}

function postNewWeek() {
  const day = date.getDay();
  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const calDate = date.getDate();
  const startOfWeekMonth = date.getMonth();
  const startOfWeekDate = calDate - day;
  let endOfWeekMonth = date.getMonth();
  let endOfWeekDate = startOfWeekDate + 6;
  if (endOfWeekDate > lastDayOfMonth) {
    endOfWeekMonth += 1;
    endOfWeekDate -= lastDayOfMonth;
  }
  const weekData = JSON.stringify({
    startOfWeekMonth,
    startOfWeekDate,
    endOfWeekMonth,
    endOfWeekDate
  });
  localStorage.setItem('currentWeek', weekData);
}

export function isNewDay() {
  const dayOfWeek = JSON.parse(localStorage.getItem('dayOfWeek'));
  const calDate = date.getDate();
  if (!dayOfWeek) {
    postNewDay();
    return true;
  }
  return !(dayOfWeek.date == calDate);
}

export function isNewWeek() {
  const currentWeek = JSON.parse(localStorage.getItem('currentWeek'));
  const currentMonth = date.getMonth();
  const currentDate = date.getDate();
  if (!currentWeek) {
    postNewWeek();
    return true;
  }
  if (
    currentDate > currentWeek.endOfWeekDate &&
    currentMonth >= currentWeek.endOfWeekMonth
  ) {
    return true;
  }
  return false;
}
