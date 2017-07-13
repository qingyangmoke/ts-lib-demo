export default class Animal {
    constructor(name) {
        this._name = name;
    }
    say() {
        console.log(`i am ${this.name}`);
    }
    addFood(...abc) {
        console.log(abc);
    }
    get name() {
        return this._name;
    }
}
Animal.type = 'Animal';
//# sourceMappingURL=Animal.js.map