let target = document.querySelector("#dynamic"); 
            // dynamic id를 갖고 있는 문서 객체를 선택해라
let strArr = ['Learn to HTML', 'Learn to CSS', 'Learn to JavaScript', 'Learn to Python', 'Learn to React'];
let selectStr = strArr[Math.floor(Math.random() * strArr.length)];
                      // .length: 배열 길이만큼만 호출
                      // .random: 랜덤으로 수를 출력
                      // .floor: 소숫점 값 버리기
let selectStrArr = selectStr.split(""); 
                      // .split: 해당 문자열을 "" 이용해서 배열로 분리 시켜라
                      // 단어 하나하나가 쪼개져서 문자 배열로 나뉘게 됨



function randomStr(){
  let strArr = ['Learn to HTML', 'Learn to CSS', 'Learn to JavaScript', 'Learn to Python', 'Learn to React'];
  let selectStr = strArr[Math.floor(Math.random() * strArr.length)];
  let selectStrArr = selectStr.split(""); 

  return selectStrArr; // 최종값 반환
}


// 타이핑 리셋
function resetTyping(){
  target.textContent = ""; // 3초 뒤에 텍스트를 사라지게 하기
  dynamic(randomStr());
}


// 한 글자씩 텍스트 출력 함수
function dynamic(randomArr){
  
  if(randomArr.length > 0) {
    target.textContent += randomArr.shift();
                          // .shift: 배열 앞의 값부터 출력하게 함
    setTimeout(function(){  
      dynamic(randomArr); 
      // 1. 재귀함수 원리를 이용. randomArr이 0보다 크면 다시 호출.
      // 2. setTimeout으로 randomArr을 매개변수로 해서 호출
    },80);
  } else { // randomArr이 0보다 크지 않을 경우, 문자를 다 출력시켰을 경우
    setTimeout(resetTyping, 3000);
  }
}

// dynamic(selectStrArr); // 배열화 된 값이 매개변수로 전달 됨을 의미
dynamic(randomStr());     // 호출된 값으로 전달하도록 변경

console.log(selectStr);
console.log(selectStrArr);

function blink(){
  target.classList.toggle("active"); // active를 추가/삭제 반복
}
setInterval(blink, 500); // 위의 active 효과를 0.5초 간격으로 진행