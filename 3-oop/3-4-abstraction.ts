// {
//     type CoffeeCup = {
//         shots: number
//         hasMilk: boolean
//     }
//
//     class CoffeeMaker {
//         private static BEANS_GRAM_PER_SHOT: number = 7
//         private coffeeBeans: number = 0
//
//         private constructor(coffeeBeans: number) {
//             this.coffeeBeans = coffeeBeans
//         }
//
//         static makeMachine(coffeeBeans: number): CoffeeMaker {
//             return new CoffeeMaker(coffeeBeans)
//         }
//
//         fillCoffeeBeans(beans: number) {
//             if (beans < 0) {
//                 throw new Error('value for beans should be greater than 0')
//             }
//             this.coffeeBeans += beans
//         }
//
//         private grindBeans(shots) {
//             console.log('grinding beans for ${shots}.')
//             if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
//                 throw Error('Not enough coffee beans!')
//             }
//         }
//
//         private preheat(): void {
//             console.log('heating up...🔥')
//         }
//
//         private extract(shots: number): CoffeeCup {
//             console.log(`Pulling ${shots} shots...`)
//             return {
//                 shots, hasMilk: false
//             }
//         }
//
//         makeCoffee(shots: number): CoffeeCup {
//             this.grindBeans(shots)
//             this.preheat()
//             return this.extract(shots)
//
//         }
//     }
//
//     const maker = CoffeeMaker.makeMachine(32)
//     maker.makeCoffee(2)
// }
{
    type CoffeeCup = {
        shots: number
        hasMilk: boolean
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7
        private coffeeBeans: number = 0

        private constructor(coffeeBeans: number) {
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

        private grindBeans(shots) {
            console.log('grinding beans for ${shots}.')
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

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32)
    maker.makeCoffee(2)
    maker.fillCoffeeBeans(16)

    const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32)
    maker2.makeCoffee(2)
    // maker2.fillCoffeeBeans(16) -> fillCoffeeBeans() 사용 불가
}
