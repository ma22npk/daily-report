//変数の設定================================
//let=代入が可能な変数
//const=代入ができない変数
//スタッフ------------------------------------
let staff = ['店長', '副店長', '料理長', '副料理長', 'バイト', 'パート', 'オーナー', 'その他'];
//消費税率
let taxRate = 1.1;
//税抜き価格
let unTax = 20000;
//税込金額
let inTax = 11000;
//総売上
let salesAll = 200000;
//ディナー売り上げ
let dinnerSales = 150000;
//ランチ売り上げ
let lunchSales = 50000;
//店舗エリア
let area = ['埼玉', '東京', '名古屋', '大阪'];
//クレジットカード会社
let cardCp = ['DC', 'JCB', 'UCグループ'];
//業者---------------------------------------
//区分
const purchaseCategory = ['食材', 'ドリンク代', '雑費'];
//取引先
let purchaseClient = ['八百屋', '魚屋', '肉屋', '酒屋', '米屋', '総合食材', 'その他'];
//日付----------------------------------------
//年
let year = [2020, 2021, 2022, 2023];
//月
const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//日???
let date = [1 <= 31];
//曜日
const weekDays = ['月', '火', '水', '木', '金', '土', '日'];
// 計算式 =============================================
//税込価格を求める (税抜き価格＊消費税率)
const mathInTax = unTax * taxRate;
//税抜き価格を求める（税込価格/消費税率）
const mathUnTax = inTax / taxRate;
//税抜き、税込価格のさを求める
const mathTax = inTax - unTax;
// //ランチの売り上げを求める（総売上 - ディナーの売り上げ）
// const mathSalesLunch = salesAll - dinnerSales;
// //ディナーの売り上げを求める（総売上 - ランチの売り上げ）
// const mathSalesDinner = salesAll - lunchSales;
//現在の日時を表示してHTMLに表示する======================
//Dateオブジェクトで本日の日付を取得する
let today = new Date();
document.getElementById("view-time").innerHTML = getNow();
//日時の変数設定
function getNow() {
  let now = new Date();
  let year = now.getFullYear();
  let mon = now.getMonth() + 1; //1を足すこと
  let day = now.getDate();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();
  let dayOfWeek = now.getDay(); //曜日（数値）
  let dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土", ][dayOfWeek]; //曜日（日本語表記）
  let allDate = year + "年" + mon + "月" + day + "日" + dayOfWeekStr + "曜日" /*+ hour + "時" + min +"分" + sec + "秒"*/ ;
  return allDate;
};

//
//onChange(フォームパーツで変化が起きた時に発生するイベント)
// その他 ===========================
//pushメソッドで配列データの末尾に新たな要素を追加する
const numbers =  [1,2,3,4,5,];
numbers.push(6,7,8,9);


//【アコーディオンメニュー】
jQuery('.accordion__head').click(function () {
jQuery(this).next().slideToggle();
jQuery(this).children('.fa-arrow-circle-down').toggleClass( 'fa-arrow-circle-left' );
});
