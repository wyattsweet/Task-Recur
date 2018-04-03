const date = new Date();

export function postNewDay() {
  const calDate = date.getDate();
  const month = date.getMonth() + 1;
  localStorage.setItem('dayOfWeek', JSON.stringify({ month, date: calDate }));
}

export function postNewWeek() {
  const day = date.getDay();
  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const calDate = date.getDate();
  const startOfWeekMonth = date.getMonth() + 1;
  const startOfWeekDate = calDate - day;
  let endOfWeekMonth = date.getMonth() + 1;
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

export const postNewMonth = () => {
  const month = date.getMonth() + 1;
  localStorage.setItem('currentMonth', month);
};

export function isNewDay() {
  const dayOfWeek = JSON.parse(localStorage.getItem('dayOfWeek'));
  const calDate = date.getDate();
  if (!dayOfWeek) {
    return true;
  }
  return !(dayOfWeek.date == calDate);
}

export function isNewWeek(newDate = date) {
  const currentWeek = JSON.parse(localStorage.getItem('currentWeek'));
  const currentMonth = newDate.getMonth() + 1;
  const currentDate = newDate.getDate();
  const newMonth = () => {
    return currentMonth !== currentWeek.endOfWeekMonth;
    //    return (
    //      currentMonth >= currentWeek.endOfWeekMonth ||
    //      (currentMonth == 1 && currentWeek.endOfWeekMonth == 12)
    //    );
  };
  if (!currentWeek) {
    return true;
  }

  if (currentDate > currentWeek.endOfWeekDay || newMonth()) {
    return true;
  }
  return false;
}

export function isNewMonth() {
  const savedMonth = JSON.parse(localStorage.getItem('currentMonth'));
  const currentMonth = date.getMonth() + 1;
  if (!savedMonth) {
    return true;
  }
  const newMonth = savedMonth !== currentMonth;
  return newMonth;
}
