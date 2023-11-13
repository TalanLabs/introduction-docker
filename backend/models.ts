export class Cat {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly age: number,
        public readonly type: string
    ) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.type = type;
    }
}