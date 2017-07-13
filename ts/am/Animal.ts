export default class Animal {
  private _name: String;
  
  constructor(name: String) {
    this._name = name;
  }

  public say(): void {
    console.log(`i am ${this.name}`);
  }

  public addFood(...abc: Array<any>) {
    console.log(abc);
  }

  public get name(): String {
    return this._name;
  }

  static type: String = 'Animal';

}