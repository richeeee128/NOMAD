// 다형성, 제네릭, 클래스, 인터페이스 모두 다 합치기!

interface SStorage<T> {
  [key: string]: T;
}

// 제네릭의 놀라운 점! 다른 타입에게 물려줄 수 있다는 것
class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
stringsStorage.get("hello");
stringsStorage.set("key", "value");

const booleansStorage = new LocalStorage<boolean>();
booleansStorage.get("xxx");
booleansStorage.set("key", true);
