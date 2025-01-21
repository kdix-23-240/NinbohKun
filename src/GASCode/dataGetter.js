//dataGetter.gs
//dataGetter.gs
// スプレッドシートIDを設定
const SPREADSHEET_ID = "1rZifxG_cuDcdqfObIcN4VC6v337JOTSenxTt0vAEwmE"; // スプレッドシートのIDをここに入力

// 指定した年と月のカレンダー用データを生成
function getCalendarData(year, month) {
  const date = new Date(year, month - 1, 1);
  const calendar = [];
  let week = [];

  // 月初の曜日を取得
  for (let i = 0; i < date.getDay(); i++) {
    week.push(null); // 空セルを追加
  }

  // 月の日付を生成
  while (date.getMonth() === month - 1) {
    week.push(date.getDate());
    if (week.length === 7) {
      calendar.push(week);
      week = [];
    }
    date.setDate(date.getDate() + 1);
  }

  // 残りの曜日を埋める
  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null);
    }
    calendar.push(week);
  }

  return calendar;
}

// 指定した日付に基づきデータを取得
function getDataByDate(selectedDate) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName("シート1");
  const data = sheet.getRange("M2:Q").getValues();

  // selectedDateをDate型に変換
  const inputDate = new Date(selectedDate);

  for (let i = 0; i < data.length; i++) {
    if (!data[i][0]) continue; // 空行をスキップ

    const sheetDate = new Date(data[i][0]); // M列の値をDate型に変換

    // 日付を比較 (タイムゾーンの影響を排除)
    if (sheetDate.getTime() === inputDate.getTime()) {
      return {
        date: Utilities.formatDate(
          sheetDate,
          Session.getScriptTimeZone(),
          "yyyy/MM/dd"
        ),
        temperature: data[i][1],
        humidity: data[i][2],
        pressure: data[i][3],
        completedRate:data[i][4],
      };
    }
  }

  // 該当なし
  return null;
}

function getMonthlyData(year, month) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName("シート1");
    const data = sheet.getRange("M2:Q").getValues();

    const monthlyData = [];
    data.forEach((row) => {
      const [date, temperature, humidity, pressure] = row;
      if (!date) return;

      const [rowYear, rowMonth] = date.split("/").map(Number);
      if (rowYear === year && rowMonth === month) {
        monthlyData.push({
          date,
          temperature: Number(temperature),
          humidity: Number(humidity),
          pressure: Number(pressure),
        });
      }
    });

    return monthlyData;
  } catch (error) {
    Logger.log(`Error in getMonthlyData: ${error.message}`);
    throw new Error(`データの取得中にエラーが発生しました: ${error.message}`);
  }
}