
export function getToday (day) {
  const d = new Date();
  const n = d.getDay();

  const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    dayOfWeek[n + day]
  );
}

export function getDayOfWeek (date) {
  var dayOfWeek = new Date(date).getDay();
  return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

export function getMonthName (date) {
  var monthName = new Date(date).getMonth();
  return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][monthName];
}

export function getTodayNumber (day) {
  const d = new Date();
  const n = d.getDay();

  return (
    n + day
  );
}

export function getMonth (day) {
  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  const date = new Date();

  const monthText = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    monthText[date.addDays(day).getMonth()]
  );
}

export function getMonthNumber (day) {
  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  const date = new Date();

  return (
    date.addDays(day).getMonth() + 1
  );
}

export const getDayOfMonth = (day) => {
  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  const date = new Date();

  return (
    date.addDays(day).getDate()
  );
}

export const getYear = (day) => {
  Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  const date = new Date();

  return (
    date.addDays(day).getFullYear()
  );
}

export const getTodayDate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  // if (dd < 10) {
  //   dd = '0' + dd
  // }
  if (mm < 10) {
    mm = '0' + mm
  }
  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

export const getTomorrowDate = () => {
  let today = new Date()
  let tomorrow = today.setDate(today.getDate() + 1);

  tomorrow = new Date(tomorrow);

  let dd = tomorrow.getDate();
  let mm = tomorrow.getMonth() + 1;
  let yyyy = tomorrow.getFullYear();
  // if (dd < 10) {
  //   dd = '0' + dd
  // }
  if (mm < 10) {
    mm = '0' + mm
  }
  tomorrow = mm + '/' + dd + '/' + yyyy;

  return tomorrow;
}

export const getDayAfterTomorrowDate = () => {
  let today = new Date()
  let dayAfterTomorrow = today.setDate(today.getDate() + 2);

  dayAfterTomorrow = new Date(dayAfterTomorrow);

  let dd = dayAfterTomorrow.getDate();
  let mm = dayAfterTomorrow.getMonth() + 1;
  let yyyy = dayAfterTomorrow.getFullYear();
  // if (dd < 10) {
  //   dd = '0' + dd
  // }
  if (mm < 10) {
    mm = '0' + mm
  }
  dayAfterTomorrow = mm + '/' + dd + '/' + yyyy;

  return dayAfterTomorrow;
}

export function dateAdd(date, interval, units) {
  var ret = new Date(date); //don't change original date
  var checkRollover = function() { if(ret.getDate() != date.getDate()) ret.setDate(0);};
  switch(interval.toLowerCase()) {
    case 'year'   :  ret.setFullYear(ret.getFullYear() + units); checkRollover();  break;
    case 'quarter':  ret.setMonth(ret.getMonth() + 3*units); checkRollover();  break;
    case 'month'  :  ret.setMonth(ret.getMonth() + units); checkRollover();  break;
    case 'week'   :  ret.setDate(ret.getDate() + 7*units);  break;
    case 'day'    :  ret.setDate(ret.getDate() + units);  break;
    case 'hour'   :  ret.setTime(ret.getTime() + units*3600000);  break;
    case 'minute' :  ret.setTime(ret.getTime() + units*60000);  break;
    case 'second' :  ret.setTime(ret.getTime() + units*1000);  break;
    default       :  ret = undefined;  break;
  }
  return ret;
}





export default { getToday, getDayOfWeek, getMonthName, getTodayNumber, getMonth, getMonthNumber, getDayOfMonth, getYear, getTodayDate, getTomorrowDate, getDayAfterTomorrowDate, dateAdd };

