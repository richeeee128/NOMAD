/**  tsconfig 파일에 allowJs : true로 변경해두면, JS에서 사용한 모든 함수들을 무리없이 사용할 수 있다. 다만 타입이 엉망이 될뿐
 해결방법이 존재한다. JSDoc으로! ts-check 이후 함수 위에 코멘트를 작성해두면 해결됨. */

import * as crypto from "crypto";

/**
 * MAKE BLOCK CHAIN
 */

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha-256").update(toHash).digest("hex");
  }
}

//@types/~ 를 다운 받는 이유 : ts 타입 정의를 위한 레포지토리에서 필요한 것들을 다운 받아 필요한 정의, 타입스크립트가 타입 없다고 생산하는 오류를 방지하기 위해서.

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }

  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlcoks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");

console.log(blockchain.getBlcoks());
