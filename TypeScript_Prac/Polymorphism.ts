//Polymorphism 다형성
// ❓poly란?
// - many, serveral, much, multi 등과 같은 뜻
// ❓morphos란?
// - form, structure 등과 같은 뜻
// ❗polymorphos = poly + morphos = 여러 다른 구조

// concrete type 이전에 봤던 타입
// generic 제네릭 타입 = placeHolder 같은 타입을 스스로 유추함

type SuperPrint = {
  //(arr:number[]):void;
  //(arr:boolean[]):void;
  //(arr:number|boolean[]):void 이런 행동을 하지 않아도 됨
  <T>(arr: T[]): T;
};

const superPrint: SuperPrint = (arr) => arr[0];

const b = superPrint([1, 2, 3, 4, 5, 6]);
const c = superPrint([true, false, true]);
const d = superPrint([1, 2, true, false]);
const e = superPrint([1, 2, true, false, "hello"]);
