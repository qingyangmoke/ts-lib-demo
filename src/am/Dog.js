import { default as Animal } from './Animal';
export default class Dog extends Animal {
    constructor() {
        super('Dog');
    }
    eat(food) {
        console.log(`${this.name} eat ${food}`);
    }
}
//# sourceMappingURL=Dog.js.map