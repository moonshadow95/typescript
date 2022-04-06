{
    type CoffeeCup = {
        shots: number
        hasMilk: boolean
    }

    class CoffeeMaker {
        static BEANS_GRAM_PER_SHOT: number = 7 // class level
        coffeeBeans: number = 0 // instance (object) level

        constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        // 함수에 static 을 사용하여 constructor 호출 없이 커피 머신을 만든다.
        // 클래스 내부의 어떤 속성 값도 포함하고 있지 않기 때문에 static 을 사용한다.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
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

    const maker = new CoffeeMaker(32)
    const maker2 = CoffeeMaker.makeMachine(28)
    console.log(maker, maker2)
    console.log(maker.makeCoffee(2))
}
