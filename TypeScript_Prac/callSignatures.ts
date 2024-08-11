const add = (a: number, b: number) => a + b;

//  call signatures = 함수 위에 마우스를 올렸을 때 보게 되는 것을 의미함
//  ex) add : (a: number, b: number) => number
// 엄청나게 많이 활용될 예정.

type Minus = (a: number, b: number) => number;

const minus: Minus = (a, b) => a - b;

// 오버로딩(Overloading)
// 함수가 서로 다른 여러 개의 call signatures 를 가지고 있을 때 발생함

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config);
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};
