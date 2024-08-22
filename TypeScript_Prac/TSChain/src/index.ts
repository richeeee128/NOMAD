class Block {
  constructor(private data: string) {}
  static hello() {
    return "hi";
  }
}
import { init, exit } from "./myPackage";
/**  tsconfig 파일에 allowJs : true로 변경해두면, JS에서 사용한 모든 함수들을 무리없이 사용할 수 있다. 다만 타입이 엉망이 될뿐
 해결방법이 존재한다. JSDoc으로! ts-check 이후 함수 위에 코멘트를 작성해두면 해결됨. */
