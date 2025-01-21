//graph.gs
// スプレッドシートのデータを取得
function getSpreadsheetData() {
  const sheetId = "12Ef_kwdEdSXyQUWb0BNUj2oImbgML0YSZjq-as_h0do"; // スプレッドシートID
  const sheet = SpreadsheetApp.openById(sheetId).getSheetByName("ユーザー"); // シート名
  const data = sheet.getRange("M1:Q36").getValues(); // データ範囲
  return data;
}

// Web アプリのエントリーポイント
function doGet() {
  const data = getSpreadsheetData();
  const template = HtmlService.createTemplateFromFile("index");
  template.data = JSON.stringify(data); // JSON文字列として渡す
  return template.evaluate();
}
