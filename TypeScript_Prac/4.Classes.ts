//Class
//추상 클래스 = 다른 클래스가 받을 수 있는 클래스 but 직접 새로운 인스턴스를 만들 수 없다.
// 다른 곳에서 상속 받을 수만 있는 클래스
abstract class User {
  constructor(
    protected firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  abstract getFirstName(): void; // 추상 메서드. 구현이 되어 있지 않은 메서드
  protected getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//클래스
class player extends User {
  // 추상 메서드가 있는 경우, 상속 클래스에서 꼭 구현을 해주어야 한다.
  getFirstName() {
    console.log(this.nickname);
  }
}

const niico = new player("nico", "las", "니꼬");

// niico.firstName(); // 컴파일 자체가 되지 않음
// niico.getFullName(); // 컴파일 자체가능한. 근데 private getFullName 으로 변경하면 안됨
niico.getFirstName();

// public 인스턴스 접근 O 클래스 내부 O 상속 O <Default>
// protected 인스턴스 접근 X 클래스 내부 O 상속 O
// private 인스턴스 접근 X 클래스 내부 O 상속 X
