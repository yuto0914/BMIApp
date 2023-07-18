console.log("main.js!!");

 function onClick(){
        //1つ目の入力ボックスの値を取得する
        var value1 = document.getElementById("num1").value;
        //2つ目の入力ボックスの値を取得する
        var value2 = document.getElementById("num2").value;


        //足算する
        var result =  parseInt(value1) / (parseInt(value2) * parseInt(value2)*0.0001)  ;
        result = result * 10;
        result = Math.round(result);
        result = result / 10;
        console.log(result);
        let kekka = "";
        if (result < 18.5) {
            kekka=("低体重（やせ型）です。");
          } else if (result < 25) {
            kekka=("普通の体重です。");
          } else if (result < 30) {
            kekka=("肥満（1度）です。");
          } else if (result < 35) {
            kekka=("肥満（2度）です。");
          } else if (result < 40) {
            kekka=("肥満（3度）です。");
          }else{
            kekka=("肥満（4度）です。");
          }
        //値を設定する
        document.querySelector('.result').innerHTML = result ;
        document.querySelector('.kekka').innerHTML = kekka ;

    }

    // 体重（kg）と身長（m）を設定
var weight = 70;
var height = 1.75;

// BMIを計算する関数
function calculateBMI(weight, height) {
  var bmi = weight / (height * height);
  return bmi;
}

// BMIを計算して表示
var bmiResult = calculateBMI(weight, height);
console.log("あなたのBMIは " + bmiResult.toFixed(2) + " です。");