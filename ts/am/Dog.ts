import Animal from './Animal';
/**
 * 继承 多态
 */
export default class Dog extends Animal implements IEat {
  
  constructor() {
    super('Dog');
  }

  public eat(food: any): void {
    console.log(`${this.name} eat ${food}`);
  } 
}