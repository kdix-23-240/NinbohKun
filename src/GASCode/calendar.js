//calendar.gs
/**
 * 指定された年と月のカレンダーデータを2次元配列で返す
 * @param {number} year - 表示する年
 * @param {number} month - 表示する月（1-12）
 * @return {Array<Array<number|null>>} 2次元配列のカレンダーデータ
 */
function getCalendarData(year, month) {
  const firstDay = new Date(year, month - 1, 1);
  const lastDay = new Date(year, month, 0);
  const calendar = [];
  let week = Array(7).fill(null);
  
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const day = new Date(year, month - 1, i);
    const dayOfWeek = day.getDay();
    week[dayOfWeek] = i;

    if (dayOfWeek === 6 || i === lastDay.getDate()) {
      calendar.push(week);
      week = Array(7).fill(null);
    }
  }
  
  return calendar;
}

/**
 * WebアプリケーションURLを返す
 * 必要に応じてこの関数を他のファイルで使用できます
 */
function getAppUrl() {
  return ScriptApp.getService().getUrl();
}