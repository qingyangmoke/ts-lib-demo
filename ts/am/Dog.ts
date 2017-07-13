import { default as Animal } from './Animal';
export default class Dog extends Animal implements IEat {
  
  constructor() {
    super('Dog');
  }

  public eat(food: any): void {
    console.log(`${this.name} eat ${food}`);
  } 
}