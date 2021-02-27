'use strict';
const number = process.argv[2] || 0;//選択的代入。左の値があればそれを、なければ0で動かす
//数値が入る変数。
//Nodeのプログラムを実行するときはNodeの後に最初に実行したいファイル名を書く
//次に数値や値を取りたいときは、数値を書く。配列は0から始まるので
//ここではNode、ファイル名、数値なので、数値は[2]となる
let sum = 0;//sum変数を最初0でとり、
for (let i = 1; i <= number; i++) {//iが1からnumber以下まで続く
  sum = sum + i;
}
console.log(sum); //sumの結果を出力
