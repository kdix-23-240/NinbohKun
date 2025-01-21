//Code.gs

function doGet(e) {
  let sheet1 = SpreadsheetApp.getActive().getSheetByName("シート1");
  let sheet3 = SpreadsheetApp.getActive().getSheetByName("シート1");
  let page = e.parameter.page;
  
  let icon = 'https://drive.google.com/uc?id=1co_XHiwfPDdbfLOQCqhqPqLhYP91QdBU&.png';

  if (!page) {
    page = 'login';
    
  }

  let template = HtmlService.createTemplateFromFile(page);

  if(page === 'register'){
    let html = template.evaluate();
    html
      .setTitle("登録")
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setFaviconUrl(icon);
    return html;
  }else if(page === 'menu'){
    let html = template.evaluate();
    html
      .setTitle("メニュー")
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setFaviconUrl(icon);
    return html;
  }else if(page === 'graph'){
    let html = template.evaluate();
    html
      .setTitle("グラフ")
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setFaviconUrl(icon);
    return html;
  }else if(page === 'calendarScene'){
    template.qs = sheet3.getDataRange().getValues();
    let html = template.evaluate();
    html
      .setTitle("カレンダー")
      .setFaviconUrl(icon);
    return html;
  }

  let html = template.evaluate();
    html
      .setTitle("ログイン")
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setFaviconUrl(icon);

  return html;
}

function getAppUrl() {
  return ScriptApp.getService().getUrl();
}


function doPost(postdata){

 /**M5Stack用の変数 
 const requestData = null;
 const action1 = "";
 */

 let isJsonData = false;
 var params;

 
 
 /**アカウント関連の変数 */

  const action = postdata.parameter.action;
  const name = postdata.parameters.name.toString(); //入力されたユーザーネームを取得する
  const password = postdata.parameters.password.toString();  //入力されたパスワードを取得する
  const checkAccount = judgeAccounts(name, password);  //あっていたらtrue、間違っていたらfalseが返ってくる

 
 /**共通変数 */
 const blankSell = judgeBlank();
 let icon = 'https://drive.google.com/uc?id=1co_XHiwfPDdbfLOQCqhqPqLhYP91QdBU&.png';
 let template;

//  try {
//         console.log("JSON形式でデータを解析する");
//         params = JSON.parse(postdata.postData.getDataAsString());
//         isJsonData = true; // JSONデータであることを確認
//     } catch (e) {}

  if(action === 'login'){
    if(checkAccount) {//ログインが成功した場合の処理
      template = HtmlService.createTemplateFromFile('menu');  
      template.name = name;

      return template
        .evaluate()
        .setTitle("メニュー")
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setFaviconUrl(icon);
    } else {//ログインが失敗した場合の処理
      template = HtmlService.createTemplateFromFile('error');   

      return template
        .evaluate()
        .setTitle("エラー")
        .addMetaTag('viewport', 'width=device-width, initial-scale=1');
    }
  }else if(action === 'register'){
    template = HtmlService.createTemplateFromFile('login');
    const sheet = SpreadsheetApp.getActiveSheet(); 
    sheet.getRange(blankSell, 1).setValue(name);
    sheet.getRange(blankSell, 2).setValue(password);
    return template
        .evaluate()
        .setTitle("ログイン")
        .addMetaTag('viewport', 'width=device-width, initial-scale=1')
        .setFaviconUrl(icon);

    }
  
// if(isJsonData){}
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('ユーザー');

  if(params.type ==='task'){//わからない場所
    
    var data = params.data;
    

    sheet.getRange(blankSell, 7).setValue(data);
    
  }else{
   
    var data = params.data;
    // 送られてきたデータをスラッシュで区切り、配列にする
    var splitData = data.split("/"); // [データ1, データ2, データ3]


    /**  最後のデータのある行を取得し、次の行にデータを挿入
    var lastRow = sheet.getLastRow();
    var nextRow = lastRow + 1;*/

    /**  A列からC列にそれぞれのデータを挿入*/
    sheet.getRange(blankSell, 4).setValue(splitData[0]);
    sheet.getRange(blankSell, 5).setValue(splitData[1]);
    sheet.getRange(blankSell, 6).setValue(splitData[2]);

    /** 
    sheet.getRange(nextRow, 1).setValue(splitData[0]); // A列に1つ目のデータ
    sheet.getRange(nextRow, 2).setValue(splitData[1]); // B列に2つ目のデータ
    sheet.getRange(nextRow, 3).setValue(splitData[2]); // C列に3つ目のデータ
    */

    // 結果をJSON形式で返す
    var result = {
      "result": splitData
    };

    var out = ContentService.createTextOutput();
    out.setMimeType(ContentService.MimeType.JSON);
    out.setContent(JSON.stringify(result));

    return out;
  }
  
  
}


function judgeAccounts(name, password){
 const sheets = SpreadsheetApp.openById('1rZifxG_cuDcdqfObIcN4VC6v337JOTSenxTt0vAEwmE');  //スプレッドシートをとってくる

 const sheet = sheets.getSheetByName("シート1");  //シートをとってくる

 const accounts_name = sheet.getRange(2,1,100,1).getValues();  //名前とってくる
 const accounts_pass = sheet.getRange(2,2,100,1).getValues();  //パスワードとってくる
 console.log(accounts_name);
 console.log(accounts_pass);
 let judge = false;
 for(let i in accounts_name){//名前とパスワードがあっていればtrue、あってなければfalseを返す
   if(accounts_name[i] == name && accounts_pass[i] == password){
     judge = true;
     break;
   }
 }
 return judge;
}

function judgeBlank(){
  const sheet = SpreadsheetApp.getActiveSheet();  //アクティブなシートを取得して変数sheetとして宣言
  for(let row=2; row<=18; row++){         
    const rangeA = sheet.getRange(row,1,1,1);        //1行目から18行目まで{}内の処理を繰り返す
    const rangeB = sheet.getRange(row,2,1,1);      //B:1〜B:18セルを1つずつ指定
    if(rangeA.isBlank() && rangeB.isBlank()){                          //指定したセルが空白だった場合
      console.log("A:"+row+"と"+"B:"+row+"のセルが空白です");         //セル番号をログに返す
      return row;
      break;
    }
  }
}