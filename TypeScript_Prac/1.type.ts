// unknown 아직 타입이 무엇인지 모를 때 사용함. 대체로 API를 받아올 때 사용

let a: unknown;

if (typeof a === "number") {
  let b = a + 1;
}

// void return을 하지 않는 함수. 보통 따로 지정하지 않음

function hello() {
  console.log("x");
}

//  never 절대 return 하지 않을 때. 예외를 지정할 때 사용하고 간혹가다가 사용함
function hi(params: string | number) {
  if (typeof params === "string") {
    params;
  } else if (typeof params === "number") {
    params;
  } else {
    params; // 이때의 params는 never로 나온다
  }
}
