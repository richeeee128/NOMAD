const add = (a: number, b: number) => a + b;

//  call signatures = 함수 위에 마우스를 올렸을 때 보게 되는 것을 의미함
//  ex) add : (a: number, b: number) => number
// 엄청나게 많이 활용될 예정.

type Minus = (a: number, b: number) => number;

const minus: Minus = (a, b) => a - b;

// 오버로딩(Overloading)
// 함수가 서로 다른 여러 개의 call signatures 를 가지고 있을 때 발생함

//많은 사람들이 패키지나 라이브러리를 만들 때 자주 사용하는 예시

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path, config.state);
  }
};

// 파라미터의 개수가 다른 예시
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add2: Add = (a, b, c?: number) => {
  // c가 옵션이라는 말을 해줘야하기 때문에 타입과 옵션 처리를 해줘야함
  if (c) return a + b + c;
  return a + b;
};
