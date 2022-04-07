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
    var AmateurUser = /** @class */ (function () {
        function AmateurUser(machine) {
            this.machine = machine;
        }
        AmateurUser.prototype.makeCoffee = function () {
            var coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        };
        return AmateurUser;
    }());
    var ProBarista = /** @class */ (function () {
        function ProBarista(machine) {
            this.machine = machine;
        }
        ProBarista.prototype.makeCoffee = function () {
            var coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(15);
            this.machine.clean();
        };
        return ProBarista;
    }());
    var maker = CoffeeMachine_1.makeMachine(32);
    var amateur = new AmateurUser(maker);
    var pro = new ProBarista(maker);
    amateur.makeCoffee();
    pro.makeCoffee();
}
