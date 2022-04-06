{
    type CoffeeCup = {
        shots: number
        hasMilk: boolean
    }

    // 외부에서 변경할 수 없도록 정보를 은닉한다.
    // public -> default
    // private -> 어떤 누구도 클래스 외부에서 접근 불가
    // protected -> 이 클래스를 상속 받은 다른 클래스 내부에서 접근 가능

    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7
        private coffeeBeans: number = 0

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeebeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans
        }


        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT
            return {
                shots, hasMilk: false
            }
        }
    }

    const maker = CoffeeMaker.makeMachine(32)
    maker.fillCoffeebeans(16)
}