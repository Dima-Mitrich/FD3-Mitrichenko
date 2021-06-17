var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (newProduct) {
        this.products.push(newProduct);
    };
    Scales.prototype.getSumScale = function () {
        return this.products.reduce(function (prevVal, item) { return prevVal + item.getScale(); }, 0);
    };
    Scales.prototype.getNameList = function () {
        return this.products.map(function (elem) { return elem.getName(); });
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_scale) {
        this.scale = _scale;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.scale;
    };
    return Product;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_scale) {
        var _this = _super.call(this, _scale) || this;
        _this.name = 'Apple';
        return _this;
    }
    return Apple;
}(Product));
var Banana = /** @class */ (function (_super) {
    __extends(Banana, _super);
    function Banana(_scale) {
        var _this = _super.call(this, _scale) || this;
        _this.name = 'Banana';
        return _this;
    }
    return Banana;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_scale) {
        var _this = _super.call(this, _scale) || this;
        _this.name = 'Tomato';
        return _this;
    }
    return Tomato;
}(Product));
var scale = new Scales();
scale.add(new Apple(200));
scale.add(new Banana(100));
scale.add(new Tomato(150));
console.log(scale.getSumScale(), scale.getNameList());
//# sourceMappingURL=scales.js.map