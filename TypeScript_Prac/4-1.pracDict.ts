type Words = {
  [key: string]: string; // 아직 어떠한 값을 받는지 모르지만, 한정된 타입(string)만 받겠다고 한 것
};

class Dict {
  private words: Words;
  // 수동으로 초기화 시켜줌
  constructor() {
    this.words = {};
  }
  // 수동으로 초기화 시켜줌으로서 클래스를 타입으로 사용할 수 있음.
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
  del(term: string, def: string) {
    delete this.words[term], this.words[def];
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();
dict.add(kimchi);
