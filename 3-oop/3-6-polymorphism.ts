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

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: number) {
            super(beans)
        }

        private steamMilk(): void {
            console.log('steaming milk...🥛')
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            this.steamMilk()
            return {...coffee, hasMilk: true}
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return {
                ...coffee, hasSugar: true
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 2022),
        new SweetCoffeeMaker(16),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 2000),
    ]
    machines.forEach(machine => {
        console.log('-----------------')
        machine.makeCoffee(1)
    })

}
