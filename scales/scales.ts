
class Scales {

    products:Product[];

    constructor() {
        this.products = [];
    }

    add(newProduct:Product):void {
        this.products.push(newProduct);
    }

    getSumScale():number {
        return this.products.reduce((prevVal:number, item:Product):number => prevVal + item.getScale(), 0)
    }

    getNameList():string[] {
        return this.products.map((elem:Product) => elem.getName());
    }
}


class Product {

    name:string;
    scale:number;

    constructor(_scale:number) {
        this.scale = _scale;
    }
    
    getName():string {
        return this.name;
    }

    getScale():number {
        return this.scale;
    }
}

class Apple extends Product {

    constructor(_scale:number) {
        super(_scale);
        this.name = 'Apple'
    }
}

class Banana extends Product {

    constructor(_scale:number) {
        super(_scale);
        this.name = 'Banana'
    }
}

class Tomato extends Product {

    constructor(_scale:number) {
        super(_scale);
        this.name = 'Tomato'
    }
}


let scale = new Scales();
scale.add(new Apple(200));
scale.add(new Banana(100));
scale.add(new Tomato(150));

console.log(scale.getSumScale(), scale.getNameList());








