// type은 특정 값을 가지도록 제한할 수 있음
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

// type은 오브젝트의 모양을 묘사하는데도 사용할 수 있음
// type SportPlayer = {
//   name: string;
//   team: Team;
//   health: Health;
// };

// Interface 오직 오브젝트의 모양을 묘사하는데만 사용함. React에서 많이 사용함
interface SportPlayer {
  readonly name: string;
  team: Team;
  health: Health;
}

// 조금 더 클래스처럼 상속 받을 수 있음
interface UserInfo extends SportPlayer {
  lastName: string; // 요소를 추가적으로 쌓을 수 있음
}
// = type UserInfo = SportPlayer & {}

const yeon: UserInfo = {
  name: "yeon",
  team: "blue",
  health: 10,
  lastName: "lee",
};

// 인터페이스는 클래스의 모양을 미리 만들어둠
interface HelloUser {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

class Playzr implements HelloUser {
  constructor(public firstName: string, public lastName: string) {}
  //프라이빗 & 프로텍 모두 오류나고 오로지 퍼블릭만. 인터페이스 상속의 문제점 중 하나. 여러개를 상속 받을수도 있음.
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hello ${this.fullName()}`;
  }
}
