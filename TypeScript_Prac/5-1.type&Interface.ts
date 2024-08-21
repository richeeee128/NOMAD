// 타입과 인터페이스는 매우 유사한 성격을 갖는다.
// 타입은 새로운 프로퍼티를 추가하기 위해 다시 선언될 수 없지만, 인터페이스는 항상 가능하다는 점

/// type
type PlayerA = {
  name: string;
};
type PlayerAA = PlayerA & {
  lastName: string;
};

/// interface
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}

//type 은 불가능하지만 interface는 가능한 것
interface PlayerBB {
  health: number;
}

const playerB: PlayerBB = {
  name: "nico",
  lastName: "las",
  health: 10,
};

class Uuser implements PlayerA {
  constructor(public name: string) {}
}
