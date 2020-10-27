// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。

function answer(){


// Q 1
var q1_text =document.querySelector("#q1-text");
console.log(q1_text.textContent);

// Q 2
var q2_text = document.querySelector("#q2-text");
q2_text.textContent = "こんにちは";


// Q 3
var q3_text = document.querySelector("#q3-text");
q3_text.style.color="blue";


// Q 4
  var q4_text = document.querySelectorAll('.q4-text');
  console.log(q4_text);
  // 新しく作ったq4に繰り返している間要素をひとつずつ代入する
  for(let q4 of q4_text){
  	console.log(q4);
  	q4.style.color = "blue";
  }
  // for ofを使った方法。配列の数がいくつか意識せずに繰り返し処理を行える方法

// Q 5
  var q5_text = document.querySelectorAll('.q5-text');
  console.log(q5_text);
  // 新しく作ったq4に繰り返している間要素をひとつずつ代入する
  for(let q5 of q5_text){
  	console.log(q5);
  	q5.style.backgroundColor = "blue";
  }
}

// ボタンなしのやり方↓

// Q 1
// let msg = document.getElementById("q1-text");
// 	console.log(msg.textContent);



// // Q 2
// let messageS = document.getElementById("q2-text")
// messageS.textContent = "大丈夫";


// // // Q 3

// let messageSpan = document.getElementById("q3-text");
//     console.log(messageSpan);
//     messageSpan.style.color = "blue";

// // Q 4 (難)
// // Q 4 (難)
// // 「for of」を使います。


//   let elements = document.getElementsByClassName('q4-text');
//   for(i=0;i<elements.length;i++){
//     elements[i].style.color = "#00ff00";
//   }

// // Q 5

//     let msgP = document.getElementsByClassName('q5-text');
//   for(i=0;i<msgP.length;i++){
//     msgP[i].style.backgroundColor = "#00ff00";
//   }


