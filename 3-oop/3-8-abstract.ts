{
    type CoffeeCup = {
        shots: number
        hasMilk?: boolean
        hasSugar?: boolean
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup
    }

    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7
        private coffeeBeans: number = 0

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
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

        protected abstract extract(shots: number): CoffeeCup

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots)
            this.preheat()
            return this.extract(shots)
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: number) {
            super(beans)
        }

        private steamMilk(): void {
            console.log('steaming milk...🥛')
        }

        protected extract(shots: number): CoffeeCup {
            this.steamMilk()
            return {shots, hasMilk: true}
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return {shots, hasSugar: true}
        }
    }

    const machines: CoffeeMaker[] = [
        new CaffeLatteMachine(16, 2022),
        new SweetCoffeeMaker(16),
        new CaffeLatteMachine(16, 2000),
    ]
    machines.forEach(machine => {
        console.log('-----------------')
        machine.makeCoffee(1)
    })

}
