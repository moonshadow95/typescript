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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
{
    var CoffeeMachine_1 = /** @class */ (function () {
        function CoffeeMachine(coffeeBeans) {
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMachine.makeMachine = function (coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
        };
        CoffeeMachine.prototype.fillCoffeeBeans = function (beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
        CoffeeMachine.prototype.clean = function () {
            console.log('cleaning the machine...🧹');
        };
        CoffeeMachine.prototype.grindBeans = function (shots) {
            console.log("grinding beans for ".concat(shots, "."));
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw Error('Not enough coffee beans!');
            }
        };
        CoffeeMachine.prototype.preheat = function () {
            console.log('heating up...🔥');
        };
        CoffeeMachine.prototype.extract = function (shots) {
            console.log("Pulling ".concat(shots, " shots..."));
            return {
                shots: shots,
                hasMilk: false
            };
        };
        CoffeeMachine.prototype.makeCoffee = function (shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        };
        CoffeeMachine.BEANS_GRAM_PER_SHOT = 7;
        return CoffeeMachine;
    }());
    var CaffeLatteMachine = /** @class */ (function (_super) {
        __extends(CaffeLatteMachine, _super);
        function CaffeLatteMachine(beans, serialNumber) {
            var _this = _super.call(this, beans) || this;
            _this.serialNumber = serialNumber;
            return _this;
        }
        CaffeLatteMachine.prototype.steamMilk = function () {
            console.log('steaming milk...🥛');
        };
        CaffeLatteMachine.prototype.makeCoffee = function (shots) {
            var coffee = _super.prototype.makeCoffee.call(this, shots);
            this.steamMilk();
            return __assign(__assign({}, coffee), { hasMilk: true });
        };
        return CaffeLatteMachine;
    }(CoffeeMachine_1));
    var SweetCoffeeMaker = /** @class */ (function (_super) {
        __extends(SweetCoffeeMaker, _super);
        function SweetCoffeeMaker() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SweetCoffeeMaker.prototype.makeCoffee = function (shots) {
            var coffee = _super.prototype.makeCoffee.call(this, shots);
            return __assign(__assign({}, coffee), { hasSugar: true });
        };
        return SweetCoffeeMaker;
    }(CoffeeMachine_1));
    var machines = [
        new CoffeeMachine_1(16),
        new CaffeLatteMachine(16, 2022),
        new SweetCoffeeMaker(16),
        new CoffeeMachine_1(16),
        new CaffeLatteMachine(16, 2000),
    ];
    machines.forEach(function (machine) {
        console.log('-----------------');
        machine.makeCoffee(1);
    });
}
