import { SEX } from './Enums';

export default class Animal {
  private _name: String;

  constructor(name: String) {
    this._name = name;
  }

  public say(): void {
    console.log(`i am ${this.name}`);
  }


  public async doSomeThing() {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('play games');
      }, 2000);
    });
    console.log('doSomeThing:', result);
  }

  
  public addFood(...abc: Array<any>) {
    console.log(abc);
  }

  public get name(): String {
    return this._name;
  }

  /**
   * 性别
   */
  private _sex: SEX = SEX.MALE;

  public get sex(): SEX {
    return this._sex;
  }

  // 静态属性
  public static type: String = 'Animal';

  // 静态方法
  public static staticMethod() {
    console.log('this is a staticMethod');
  }
}