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

        constructor(
            coffeeBeans: number,
            private milk: MilkFrothier,
            private sugar: SugarProvider
        ) {
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

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`)
            return {
                shots, hasMilk: false
            }
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots)
            this.preheat()
            const coffee = this.extract(shots)
            const sugarAdded = this.sugar.addSugar(coffee)
            return this.milk.addMilk(sugarAdded)
        }
    }

    interface MilkFrothier {
        addMilk(cup: CoffeeCup): CoffeeCup
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup
    }

    // 싸구려 우유 거품기
    class CheapMilkSteamer implements MilkFrothier {
        private steamMilk(): void {
            console.log('steaming milk...🥛')
        }

        addMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk()
            return {...cup, hasMilk: true}
        }
    }

    // 고급 우유 거품기
    class FancyMilkSteamer {
        private steamMilk(): void {
            console.log('steaming fancy milk...🥛')
        }

        addMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk()
            return {...cup, hasMilk: true}
        }
    }

    // 차가운 우유 거품기
    class ColdMilkSteamer {
        private steamMilk(): void {
            console.log('steaming cold milk...🥛')
        }

        addMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk()
            return {...cup, hasMilk: true}
        }
    }

    // 우유 없음
    class NoMilk implements MilkFrothier {
        addMilk(cup: CoffeeCup): CoffeeCup {
            return cup
        }
    }

    // 자동 설탕 제조기
    class AutomaticSugarMixer implements SugarProvider {
        private getSugar(): void {
            console.log('getting some sugar from jar...🏺')
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            this.getSugar()
            return {...cup, hasSugar: true}
        }
    }

    // 수동 설탕 제조기
    class ManualSugarMixer {
        private getSugar(): void {
            console.log('getting some sugar from jar...🏺')
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            this.getSugar()
            return {...cup, hasSugar: true}
        }
    }

    // 설탕 없음
    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup
        }
    }

    // Milk
    const cheapMilkMaker = new CheapMilkSteamer()
    const fancyMilkMaker = new FancyMilkSteamer()
    const coldMilkMaker = new ColdMilkSteamer()
    const noMilk = new NoMilk()

    // Sugar
    const autoSugar = new AutomaticSugarMixer()
    const manualSugar = new ManualSugarMixer()
    const noSugar = new NoSugar()

    // Machine
    const sweetMachine = new CoffeeMachine(12, noMilk, autoSugar)
    const latteMachine = new CoffeeMachine(12, fancyMilkMaker, noSugar)
    const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar)
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, autoSugar)
}
