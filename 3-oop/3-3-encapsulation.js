{
    // 외부에서 변경할 수 없도록 정보를 은닉한다.
    // public -> default
    // private -> 어떤 누구도 클래스 외부에서 접근 불가
    // protected -> 이 클래스를 상속 받은 다른 클래스 내부에서 접근 가능
    var CoffeeMaker_1 = /** @class */ (function () {
        function CoffeeMaker(coffeeBeans) {
            this.coffeeBeans = 0;
            this.coffeeBeans = coffeeBeans;
        }
        CoffeeMaker.makeMachine = function (coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        };
        CoffeeMaker.prototype.fillCoffeebeans = function (beans) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        };
        CoffeeMaker.prototype.makeCoffee = function (shots) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots: shots,
                hasMilk: false
            };
        };
        CoffeeMaker.BEANS_GRAM_PER_SHOT = 7;
        return CoffeeMaker;
    }());
    var maker = CoffeeMaker_1.makeMachine(32);
    maker.fillCoffeebeans(16);
    var User = /** @class */ (function () {
        function User(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.internalAge = 4;
            this.firstName = firstName;
            this.lastName = lastName;
        }
        Object.defineProperty(User.prototype, "fullName", {
            get: function () {
                return "".concat(this.firstName, " ").concat(this.lastName);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(User.prototype, "age", {
            get: function () {
                return this.internalAge;
            },
            set: function (num) {
                if (num < 0) {
                    throw new Error('Age must be greater than 0');
                }
                this.internalAge = num;
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var user = new User('Steve', 'Jobs');
    user.age = 6;
    console.log(user);
}
