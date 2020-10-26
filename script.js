// このファイルに解答を書いてください。
// 問題文はindex.htmlにあります。


// Q 1
let msg = document.getElementById("q1-text");
	console.log(msg.textContent);

// let msg = document.querySelector("#q1-text");
// console.log(msg .textContent);



// Q 2
let messageS = document.getElementById("q2-text")
messageS.textContent = "大丈夫";


// // Q 3
let messageSpan = document.getElementById("q3-text");
    console.log(messageSpan);
    messageSpan.style.color = "blue";


// Q 4 (難)
// 「for of」を使います。

  let elements = document.getElementsByClassName('q4-text');
  for(i=0;i<elements.length;i++){
    elements[i].style.color = "#00ff00";
  }

// Q 5

// let message = document.getElementsByClassName("q5-text");
//     message.style.backgroundColor = "blue";

//     irobako = document.getElementById("box");
// irobako.style.backgroundColor = "black";
// }

    let msgP = document.getElementsByClassName('q5-text');
  for(i=0;i<msgP.length;i++){
    msgP[i].style.backgroundColor = "#00ff00";
  }


