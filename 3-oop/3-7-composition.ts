{
    type CoffeeCup = {
        shots: number
        hasMilk?: boolean
        hasSugar?: boolean
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7
        private coffeeBeans: number = 0

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans
        }

        clean(): void {
            console.log('cleaning the machine...🧹')
        }

        private grindBeans(shots) {
            console.log(`grinding beans for ${shots}.`)
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw Error('Not enough coffee beans!')
            }
        }

        private preheat(): void {
            console.log('heating up...🔥')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`)
            return {
                shots, hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots)
            this.preheat()
            return this.extract(shots)
        }
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer {
        private steamMilk(): void {
            console.log('steaming milk...🥛')
        }

        addMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk()
            return {...cup, hasMilk: true}
        }
    }

    // 설탕 제조기
    class AutomaticSugarMixer {
        private getSugar(): void {
            console.log('getting some sugar from jar...🏺')
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            this.getSugar()
            return {...cup, hasSugar: true}
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(
            beans: number,
            public readonly serialNumber: number,
            private milkFrother: CheapMilkSteamer
        ) {
            super(beans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.milkFrother.addMilk(coffee)
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        constructor(private beans: number, private sugar: AutomaticSugarMixer) {
            super(beans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.sugar.addSugar(coffee)

        }
    }

    class SweetCaffeLatteMachine extends CoffeeMachine {
        constructor(
            private beans: number,
            private milk: CheapMilkSteamer,
            private sugar: AutomaticSugarMixer
        ) {
            super(beans)
        }

        makeCoffee(shots): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.milk.addMilk(this.sugar.addSugar(coffee))
        }
    }
}
