var calculation = '';
//入力内容を保持//
function inpt(val) {
  var calcResult = document.querySelector('.calcresult');
  
  //演算子と小数点が連続して入力されないようにする//
  if ((val === '+' || val === '-' || val === '*' || val === '/') && isNaN(calculation.slice(-1))) {
    return;
  } else if (val === '.' && (isNaN(calculation.slice(-1)) || calculation.includes('.'))) {
    return;
  }
  
  // 数値がまだ入力されていない場合のみ '00' ボタンを無効化//
  if (calculation === '' && val === '00') {
    document.getElementById('doubleZeroButton').disabled = true;
  } else {
    calculation += val;
    calcResult.value = calculation;
    document.getElementById('doubleZeroButton').disabled = false;
  }
}
//valに数値、演算子が入る//
//document.querySelector→HTMLから取得//
//calculation = calculation + val;//
//calcresultのvalueプロパティにcalculationの内容を代入//

function calculate() {
  var calcResult = document.querySelector('.calcresult');
  try {
    var result = new Function('return ' + calculation)();
    calcResult.value = result;
    calculation = result.toString();
  } catch (error) {
    calcResult.value = 'Error';
  }
}
//try,catch によりエラーを回避//
//returnによりcalculationの内容がresultへ返される//
//toString()　計算結果を文字列に変換//


//ACボタンの挙動//
function clearV() {
  var calcResult = document.querySelector('.calcresult');
  calculation = '';
  calcResult.value = '0';
  
  // クリアした際に '00' ボタンを有効に戻す//
  document.getElementById('doubleZeroButton').disabled = false;
}
