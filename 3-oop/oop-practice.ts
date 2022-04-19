// Without OOP
{
    // 커피 한잔이 필요하다.
    type CoffeeCup = {
        // 샷 개수
        shots: number
        // 우유 유무
        hasMilk: boolean
    }
    // 샷 당 필요 커피콩
    const BEANS_PER_SHOT = 7
    // 보유 커피 콩
    let coffeeBeans = 20

    function MakeCoffee(shots: number): CoffeeCup {
        // 커피 콩 충분한지 확인
        if (coffeeBeans < shots * BEANS_PER_SHOT) {
            throw new Error('Not enough coffee beans!')
        }
        // 샷 추출 후 남은 콩 계산
        coffeeBeans -= shots * BEANS_PER_SHOT
        // 커피 한잔 오브젝트 반환
        return {shots, hasMilk: false}
    }

    const coffee = makeCoffee(2)
    console.log(coffee)
}

// With OOP - Class
{
    // with Class
    // need a cup of coffee
    type CoffeeCup = {
        // 샷 개수
        shots: number
        // 우유 유무
        hasMilk: boolean
    }

    // need a coffee maker
    class CoffeeMaker {
        // 멤버 변수
        // 샷 당 필요 커피콩 (항상 일정)
        // static -> class level 로 클래스와 연결이 되어있어 오브젝트마다 생성되지 않아 메모리를 절약한다.
        // static -> instance level 이 아니고 class level 이기 때문에 this 를 사용할 수 없다.
        static BEANS_PER_SHOT: number = 7
        // 보유 커피 콩 -> 오브젝트 마다 만들어지는 멤버 변수이므로 instance level 유지
        coffeeBeans: number = 0

        // 클래스로 인스턴스를 만들 때 항상 호출되는 함수
        constructor(coffeeBeans: number) {
            // 인스턴스를 만들 때 보유 커피 콩을 인자로 받는다.
            this.coffeeBeans = coffeeBeans
        }

        // 커피머신을 만드는 함수
        // 클래스 내부의 속성 값을 포함하지 않으므로 static 을 사용한다.
        // static 을 사용하면 외부에서 클래스를 만들지 않고도 makeMachine() 함수를
        // CoffeeMaker.makeMachine(24) 형태로 사용할 수 있다.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        // 내부 함수
        makeCoffee(shots: number): CoffeeCup {
            // 커피 콩 충분한지 확인
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            // 샷 추출 후 남은 콩 계산
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_PER_SHOT
            // 커피 한잔 오브젝트 반환
            return {shots, hasMilk: false}
        }
    }

    // make coffeeMaker
    const maker = new CoffeeMaker(32)
    console.log(maker)
    // make 2shots coffee
    const coffee = maker.makeCoffee(2)
    console.log(coffee)
}

// Encapsulation (캡슐화)
{
    // need a cup of coffee
    type CoffeeCup = {
        // 샷 개수
        shots: number
        // 우유 유무
        hasMilk: boolean
    }

    // need a coffee maker
    class CoffeeMaker {
        // 멤버 변수
        // 샷 당 필요 커피콩 (항상 일정)
        // static -> class level 로 클래스와 연결이 되어있어 오브젝트마다 생성되지 않아 메모리를 절약한다.
        // static -> instance level 이 아니고 class level 이기 때문에 this 를 사용할 수 없다.
        // encapsulation 이란? -> 외부에서 볼 수 없도록 정보를 은닉한다.
        // public -> default 값, 외부에서 접근 가능
        // private -> 클래스 외부에서 접근 불가능
        // protected -> 이 클래스를 상속받은 클래스 내부에서 접근 가능

        // 외부에서 변경할 수 없는 값
        private static BEANS_PER_SHOT: number = 7
        // 보유 커피 콩 -> 오브젝트 마다 만들어지는 멤버 변수이므로 instance level 유지
        // 외부에서 변경할 수 없는 값
        private coffeeBeans: number = 0

        // 클래스로 인스턴스를 만들 때 항상 호출되는 함수
        // 외부에서 접근할 수 없도록 하고 makeMachine 함수를 이용하도록 유도한다.
        private constructor(coffeeBeans: number) {
            // 인스턴스를 만들 때 보유 커피 콩을 인자로 받는다.
            this.coffeeBeans = coffeeBeans
        }

        // 커피머신을 만드는 함수
        // 클래스 내부의 속성 값을 포함하지 않으므로 static 을 사용한다.
        // static 을 사용하면 외부에서 클래스를 만들지 않고도 makeMachine() 함수를
        // CoffeeMaker.makeMachine(24) 형태로 사용할 수 있다.
        // 외부에서 사용해야하므로 public 으로 둔다.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        // 내부 함수
        // 외부에서 사용해야하므로 public 으로 둔다.

        // 커피콩을 채우는 함수
        fillCoffeeBeans(beans: number) {
            if (beans <= 0) {
                throw new Error('1개 이상의 커피콩을 넣어주세요!')
            }
            this.coffeeBeans += beans
        }

        // 커피를 만드는 함수
        makeCoffee(shots: number): CoffeeCup {
            // 커피 콩 충분한지 확인
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_PER_SHOT) {
                throw new Error('Not enough coffee beans!')
            }
            // 샷 추출 후 남은 콩 계산
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_PER_SHOT
            // 커피 한잔 오브젝트 반환
            return {shots, hasMilk: false}
        }
    }

    // 커피콩 28개 들어있는 커피머신 생성
    const machine = CoffeeMaker.makeMachine(28)
    // 1 shot 커피 뽑기
    machine.makeCoffee(1)
}

// Abstraction (추상화)
{
    // 필요한 인터페이스만 노출함으로써 클래스를 사용하기 쉽게 만든다.
    // 커피 머신의 중간 과정을 추가하여 복잡하게 만든다.
    // need a cup of coffee
    type CoffeeCup = {
        // 샷 개수
        shots: number
        // 우유 유무
        hasMilk: boolean
    }

    // need a coffee maker
    class CoffeeMaker implements FancyCoffeeMaker, CheapCoffeeMaker {
        // 멤버 변수

        // static -> class level 로 클래스와 연결이 되어있어 오브젝트마다 생성되지 않아 메모리를 절약한다.
        // static -> instance level 이 아니고 class level 이기 때문에 this 를 사용할 수 없다.
        // encapsulation 이란? -> 외부에서 볼 수 없도록 정보를 은닉한다.
        // public -> default 값, 외부에서 접근 가능
        // private -> 클래스 외부에서 접근 불가능
        // protected -> 이 클래스를 상속받은 클래스 내부에서 접근 가능

        // 샷 당 필요 커피콩 (항상 일정)
        // 외부에서 변경할 수 없는 값
        private static BEANS_PER_SHOT: number = 7
        // 보유 커피 콩 -> 오브젝트 마다 만들어지는 멤버 변수이므로 instance level 유지
        // 외부에서 변경할 수 없는 값
        private coffeeBeans: number = 0

        // 클래스로 인스턴스를 만들 때 항상 호출되는 함수
        // 외부에서 접근할 수 없도록 하고 makeMachine 함수를 이용하도록 유도한다.
        private constructor(coffeeBeans: number) {
            // 인스턴스를 만들 때 보유 커피 콩을 인자로 받는다.
            this.coffeeBeans = coffeeBeans
        }

        // 커피머신을 만드는 함수
        // 클래스 내부의 속성 값을 포함하지 않으므로 static 을 사용한다.
        // static 을 사용하면 외부에서 클래스를 만들지 않고도 makeMachine() 함수를
        // CoffeeMaker.makeMachine(24) 형태로 사용할 수 있다.
        // 외부에서 사용해야하므로 public 으로 둔다.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        // 내부 함수
        // 외부에서 사용해야하므로 public 으로 둔다.


        // 커피콩을 채우는 함수
        fillCoffeeBeans(beans: number) {
            if (beans <= 0) {
                throw new Error('1개 이상의 커피콩을 넣어주세요!')
            }
            this.coffeeBeans += beans
        }

        // 커피콩을 가는 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private grindBeans(shots: number) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_PER_SHOT) {
                throw new Error('커피콩이 부족합니다!')
            }
            console.log(`${shots}샷을 위해 콩을 갈고 있습니다...`)
        }

        // 물을 데우는 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private heat(): void {
            console.log('물을 데우고 있습니다...')
        }

        // 커피 추출 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private extract(shots: number): CoffeeCup {
            console.log(`${shots}샷 커피를 추출하고 있습니다...`)
            return {shots, hasMilk: false}
        }

        // 기계 청소 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        clean(): void {
            console.log('기계를 청소하고 있습니다...')
        }

        // 커피를 만드는 함수 - 외부에서 사용할 함수
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots)
            this.heat()
            return this.extract(shots)
        }
    }

    const maker = CoffeeMaker.makeMachine(26)
    maker.makeCoffee(6)

    // 인터페이스로 추상화하는 법
    // 싸구려 커피 머신
    interface CheapCoffeeMaker {
        // 커피를 만드는 기능만 있다.
        makeCoffee(shots: number): CoffeeCup

    }

    // 비싼 커피 머신
    interface FancyCoffeeMaker {
        // 커피를 만드는 기능
        makeCoffee(shots: number): CoffeeCup

        // 커피콩을 다시 채우는 기능
        fillCoffeeBeans(beans: number): void

        // 청소하는 기능
        clean(): void
    }


    // 아마추어 & 싸구려 커피 머신
    class Amateur {
        constructor(private machine: CheapCoffeeMaker) {
        }

        makeCoffee() {
            const coffee = this.machine.makeCoffee(2)
            console.log(coffee)
        }
    }

    // 바리스타 & 비싼 커피 머신
    class Barista {

        constructor(private machine: FancyCoffeeMaker) {
        }

        makeCoffee(shots: number, beans: number) {
            const coffee = this.machine.makeCoffee(shots)
            console.log(coffee)
            this.machine.fillCoffeeBeans(beans)
            this.machine.clean()
        }
    }

    const amateur = new Amateur(maker)
    const barista = new Barista(maker)
    amateur.makeCoffee()
    barista.makeCoffee(2, 14)
}

// Inheritance (계승, 상속)
{
    // 클래스를 상속 받는 클래스를 만든다.
    // 커피 머신을 상속하는 라떼 머신을 만든다.
    // need a cup of coffee
    type CoffeeCup = {
        // 샷 개수
        shots: number
        // 우유 유무
        hasMilk: boolean
    }

    // need a coffee maker
    class CoffeeMaker implements CheapCoffeeMaker {
        // 멤버 변수

        // static -> class level 로 클래스와 연결이 되어있어 오브젝트마다 생성되지 않아 메모리를 절약한다.
        // static -> instance level 이 아니고 class level 이기 때문에 this 를 사용할 수 없다.
        // encapsulation 이란? -> 외부에서 볼 수 없도록 정보를 은닉한다.
        // public -> default 값, 외부에서 접근 가능
        // private -> 클래스 외부에서 접근 불가능
        // protected -> 이 클래스를 상속받은 클래스 내부에서 접근 가능

        // 샷 당 필요 커피콩 (항상 일정)
        // 외부에서 변경할 수 없는 값
        private static BEANS_PER_SHOT: number = 7
        // 보유 커피 콩 -> 오브젝트 마다 만들어지는 멤버 변수이므로 instance level 유지
        // 외부에서 변경할 수 없는 값
        private coffeeBeans: number = 0

        // 클래스로 인스턴스를 만들 때 항상 호출되는 함수
        // 외부에서 접근할 수 없도록 하고 makeMachine 함수를 이용하도록 유도한다.
        // caffeLatteMaker 에서 상속받기 위해 public 으로 변경한다.
        public constructor(coffeeBeans: number) {
            // 인스턴스를 만들 때 보유 커피 콩을 인자로 받는다.
            this.coffeeBeans = coffeeBeans
        }

        // 커피머신을 만드는 함수
        // 클래스 내부의 속성 값을 포함하지 않으므로 static 을 사용한다.
        // static 을 사용하면 외부에서 클래스를 만들지 않고도 makeMachine() 함수를
        // CoffeeMaker.makeMachine(24) 형태로 사용할 수 있다.
        // 외부에서 사용해야하므로 public 으로 둔다.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        // 내부 함수
        // 외부에서 사용해야하므로 public 으로 둔다.

        // 커피콩을 채우는 함수
        fillCoffeeBeans(beans: number) {
            if (beans <= 0) {
                throw new Error('1개 이상의 커피콩을 넣어주세요!')
            }
            this.coffeeBeans += beans
        }

        // 커피콩을 가는 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private grindBeans(shots: number) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_PER_SHOT) {
                throw new Error('커피콩이 부족합니다!')
            }
            console.log(`${shots}샷을 위해 콩을 갈고 있습니다...`)
        }

        // 물을 데우는 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private heat(): void {
            console.log('물을 데우고 있습니다...')
        }

        // 커피 추출 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private extract(shots: number): CoffeeCup {
            console.log(`${shots}샷 커피를 추출하고 있습니다...`)
            return {shots, hasMilk: false}
        }

        // 기계 청소 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        clean(): void {
            console.log('기계를 청소하고 있습니다...')
        }

        // 커피를 만드는 함수 - 외부에서 사용할 함수
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots)
            this.heat()
            return this.extract(shots)
        }
    }

    class CaffeLatteMaker extends CoffeeMaker {
        // 추가적인 데이터를 받고 싶을 때, super() 를 사용하여 부모에서 받아온 데이터를 전달한다.
        constructor(beans: number, public readonly serialNumber: number) {
            super(beans)
        }

        // 우유를 추가하는 내부 함수
        private steamMilk(): void {
            console.log('우유를 추가하고 있습니다...')
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk()
            return {...coffee, hasMilk: true}
        }
    }

    // 인터페이스로 추상화하는 법
    // 싸구려 커피 머신
    interface CheapCoffeeMaker {
        // 커피를 만드는 기능만 있다.
        makeCoffee(shots: number): CoffeeCup
    }

    const machine = new CoffeeMaker(24)
    const latteMachine = new CaffeLatteMaker(24, 12454)
    const coffee = latteMachine.makeCoffee(1)
    console.log(coffee)
    // latteMachine 인 경우 public readonly 로 받은 데이터에 접근할 수 있다.
    console.log(latteMachine.serialNumber)

}

// Polymorphism (다형성)
{
    // 카라멜이 추가된 커피머신을 만든다.
    // 한가지의 클래스나 인터페이스에서 다른 방식으로 구현할 수 있다.
    // need a cup of coffee
    type CoffeeCup = {
        // 샷 개수
        shots: number
        // 우유 유무
        hasMilk?: boolean
        // 캐러맬 유무
        hasCaramel?: boolean
    }

    // need a coffee maker
    class CoffeeMaker implements CoffeeMachine {
        // 멤버 변수

        // static -> class level 로 클래스와 연결이 되어있어 오브젝트마다 생성되지 않아 메모리를 절약한다.
        // static -> instance level 이 아니고 class level 이기 때문에 this 를 사용할 수 없다.
        // encapsulation 이란? -> 외부에서 볼 수 없도록 정보를 은닉한다.
        // public -> default 값, 외부에서 접근 가능
        // private -> 클래스 외부에서 접근 불가능
        // protected -> 이 클래스를 상속받은 클래스 내부에서 접근 가능

        // 샷 당 필요 커피콩 (항상 일정)
        // 외부에서 변경할 수 없는 값
        private static BEANS_PER_SHOT: number = 7
        // 보유 커피 콩 -> 오브젝트 마다 만들어지는 멤버 변수이므로 instance level 유지
        // 외부에서 변경할 수 없는 값
        private coffeeBeans: number = 0

        // 클래스로 인스턴스를 만들 때 항상 호출되는 함수
        // 외부에서 접근할 수 없도록 하고 makeMachine 함수를 이용하도록 유도한다.
        // caffeLatteMaker 에서 상속받기 위해 public 으로 변경한다.
        public constructor(coffeeBeans: number) {
            // 인스턴스를 만들 때 보유 커피 콩을 인자로 받는다.
            this.coffeeBeans = coffeeBeans
        }

        // 커피머신을 만드는 함수
        // 클래스 내부의 속성 값을 포함하지 않으므로 static 을 사용한다.
        // static 을 사용하면 외부에서 클래스를 만들지 않고도 makeMachine() 함수를
        // CoffeeMaker.makeMachine(24) 형태로 사용할 수 있다.
        // 외부에서 사용해야하므로 public 으로 둔다.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        // 내부 함수
        // 외부에서 사용해야하므로 public 으로 둔다.

        // 커피콩을 채우는 함수
        fillCoffeeBeans(beans: number) {
            if (beans <= 0) {
                throw new Error('1개 이상의 커피콩을 넣어주세요!')
            }
            this.coffeeBeans += beans
        }

        // 커피콩을 가는 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private grindBeans(shots: number) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_PER_SHOT) {
                throw new Error('커피콩이 부족합니다!')
            }
            console.log(`${shots}샷을 위해 콩을 갈고 있습니다...`)
        }

        // 물을 데우는 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private heat(): void {
            console.log('물을 데우고 있습니다...')
        }

        // 커피 추출 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private extract(shots: number): CoffeeCup {
            console.log(`${shots}샷 커피를 추출하고 있습니다...`)
            return {shots, hasMilk: false}
        }

        // 기계 청소 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        clean(): void {
            console.log('기계를 청소하고 있습니다...')
        }

        // 커피를 만드는 함수 - 외부에서 사용할 함수
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots)
            this.heat()
            return this.extract(shots)
        }
    }

    class CaffeLatteMaker extends CoffeeMaker {
        // 추가적인 데이터를 받고 싶을 때, super() 를 사용하여 부모에서 받아온 데이터를 전달한다.
        constructor(beans: number, public readonly serialNumber: number) {
            super(beans)
        }

        // 우유를 추가하는 내부 함수
        private steamMilk(): void {
            console.log('우유를 추가하고 있습니다...')
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk()
            return {...coffee, hasMilk: true}
        }
    }

    class CaramelLatteMaker extends CoffeeMaker {
        constructor(beans: number) {
            super(beans)
        }

        addCaramel(): void {
            console.log('카라멜을 추가하고 있습니다...')
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            this.addCaramel()
            return {...coffee, hasCaramel: true}
        }
    }

    // 인터페이스로 추상화하는 법
    interface CoffeeMachine {
        // 커피를 만드는 기능만 있다.
        makeCoffee(shots: number): CoffeeCup
    }

    // 기본적으로 커피메이커의 배열이지만 커피머신의 배열로 지정하면
    // 커피머신 인터페이스에 있는 makeCoffee() 만 호출할 수 있다.
    const makers: CoffeeMachine[] = [
        new CoffeeMaker(16),
        new CaramelLatteMaker(16,),
        new CaffeLatteMaker(16, 123123)
    ]
    //
    makers.forEach((machine) => {
        // 다형성의 장점
        // 내부적으로 구현된 다양한 클래스들이 한가지 인터페이스를 구현하거나 동일한 부모 클래스를 상속했을 때
        // 동일한 api 를 호출할 수 있다.
        machine.makeCoffee(1)
    })
}

// Composition -  (구성)
{
    // 상속의 문제점 -> 수직적 관계이기 때문에 부모를 바꾸면 자손들에게 영향이 간다. 한가지 이상의 부모를 상속할 수 없다.
    // 캐러맬 라떼 메이커 만들기

    // need a cup of coffee
    type CoffeeCup = {
        // 샷 개수
        shots: number
        // 우유 유무
        hasMilk?: boolean
        // 캐러맬 유무
        hasCaramel?: boolean
    }

    // 인터페이스로 추상화하는 법
    interface CoffeeMachine {
        // 커피를 만드는 기능만 있다.
        makeCoffee(shots: number): CoffeeCup
    }

    // need a coffee maker
    class CoffeeMaker implements CoffeeMachine {
        // 멤버 변수

        // static -> class level 로 클래스와 연결이 되어있어 오브젝트마다 생성되지 않아 메모리를 절약한다.
        // static -> instance level 이 아니고 class level 이기 때문에 this 를 사용할 수 없다.
        // encapsulation 이란? -> 외부에서 볼 수 없도록 정보를 은닉한다.
        // public -> default 값, 외부에서 접근 가능
        // private -> 클래스 외부에서 접근 불가능
        // protected -> 이 클래스를 상속받은 클래스 내부에서 접근 가능

        // 샷 당 필요 커피콩 (항상 일정)
        // 외부에서 변경할 수 없는 값
        private static BEANS_PER_SHOT: number = 7
        // 보유 커피 콩 -> 오브젝트 마다 만들어지는 멤버 변수이므로 instance level 유지
        // 외부에서 변경할 수 없는 값
        private coffeeBeans: number = 0

        // 클래스로 인스턴스를 만들 때 항상 호출되는 함수
        // 외부에서 접근할 수 없도록 하고 makeMachine 함수를 이용하도록 유도한다.
        // caffeLatteMaker 에서 상속받기 위해 public 으로 변경한다.
        public constructor(coffeeBeans: number) {
            // 인스턴스를 만들 때 보유 커피 콩을 인자로 받는다.
            this.coffeeBeans = coffeeBeans
        }

        // 커피머신을 만드는 함수
        // 클래스 내부의 속성 값을 포함하지 않으므로 static 을 사용한다.
        // static 을 사용하면 외부에서 클래스를 만들지 않고도 makeMachine() 함수를
        // CoffeeMaker.makeMachine(24) 형태로 사용할 수 있다.
        // 외부에서 사용해야하므로 public 으로 둔다.
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        // 내부 함수
        // 외부에서 사용해야하므로 public 으로 둔다.

        // 커피콩을 채우는 함수
        fillCoffeeBeans(beans: number) {
            if (beans <= 0) {
                throw new Error('1개 이상의 커피콩을 넣어주세요!')
            }
            this.coffeeBeans += beans
        }

        // 커피콩을 가는 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private grindBeans(shots: number) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_PER_SHOT) {
                throw new Error('커피콩이 부족합니다!')
            }
            console.log(`${shots}샷을 위해 콩을 갈고 있습니다...`)
        }

        // 물을 데우는 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private heat(): void {
            console.log('물을 데우고 있습니다...')
        }

        // 커피 추출 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        private extract(shots: number): CoffeeCup {
            console.log(`${shots}샷 커피를 추출하고 있습니다...`)
            return {shots, hasMilk: false}
        }

        // 기계 청소 함수 - 내부 동작이기 때문에 private 으로 은닉하여 추상화 한다.
        clean(): void {
            console.log('기계를 청소하고 있습니다...')
        }

        // 커피를 만드는 함수 - 외부에서 사용할 함수
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots)
            this.heat()
            return this.extract(shots)
        }
    }

    // 우유 거품을 만들고 넣는 기기
    class CheapMilkSteamer implements MilkFrothier {
        private steamMilk(): void {
            console.log('우유거품을 내고 있습니다...')
        }

        addMilk(cup: CoffeeCup): CoffeeCup {
            return {...cup, hasMilk: true}
        }
    }

    class FancyMilkSteamer implements MilkFrothier {
        private steamMilk(): void {
            console.log('우유거품을 내고 있습니다...')
        }

        addMilk(cup: CoffeeCup): CoffeeCup {
            return {...cup, hasMilk: true}
        }
    }

    class ProMilkSteamer implements MilkFrothier {
        private steamMilk(): void {
            console.log('우유거품을 내고 있습니다...')
        }

        addMilk(cup: CoffeeCup): CoffeeCup {
            return {...cup, hasMilk: true}
        }
    }


    // 캐러맬을 만들고 넣는 기기
    class CaramelMaker implements CaramelProvider {
        private makeCaramel(): void {
            console.log('캐러맬을 만들고 있습니다...')
        }

        addCaramel(cup: CoffeeCup): CoffeeCup {
            return {...cup, hasCaramel: true}
        }
    }

    class FancyCaramelMaker implements CaramelProvider {
        private makeCaramel(): void {
            console.log('캐러맬을 만들고 있습니다...')
        }

        addCaramel(cup: CoffeeCup): CoffeeCup {
            return {...cup, hasCaramel: true}
        }
    }

    // 우유와 캐러맬을 넣는 기기를 기존 과정에 주입시킨다.
    // + 우유 거품
    class CaffeLatteMaker extends CoffeeMaker {
        // 추가적인 데이터를 받고 싶을 때, super() 를 사용하여 부모에서 받아온 데이터를 전달한다.
        // 인자를 private 으로 설정하면 클래스 멤버 변수로 만든다.
        constructor(
            beans: number,
            public readonly serialNumber: number,
            private milkFrothier: MilkFrothier
        ) {
            super(beans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            // 만든 커피에 우유 거품을 추가한다.
            return this.milkFrothier.addMilk(coffee)
        }
    }

    // + 캐러맬
    class CaramelCoffeeMaker extends CoffeeMaker {
        constructor(beans: number, private caramelMaker: CaramelProvider) {
            super(beans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.caramelMaker.addCaramel(coffee)
        }
    }

    // + 우유 거품 + 캐러맬
    class CaramelLatteMaker extends CoffeeMaker {
        constructor(
            beans: number,
            private milkFrothier: MilkFrothier,
            private caramelMaker: CaramelProvider
        ) {
            super(beans)
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots)
            return this.caramelMaker.addCaramel((this.milkFrothier.addMilk(coffee)))
        }
    }

    const cheapMilkMaker = new CheapMilkSteamer()
    const caramelMaker = new CaramelMaker()
    const caramelCoffeeMachine = new CaramelCoffeeMaker(12, caramelMaker)
    const latteMachine = new CaffeLatteMaker(12, 5555, cheapMilkMaker)
    const caramelLatteMachine = new CaramelLatteMaker(12, cheapMilkMaker, caramelMaker)
    // 문제점 -> 재사용성이 떨어진다. -> 다른 거품기나 캐러맬 기기를 사용할 수 없다.
    // 클래스 간 의사소통을 해야하는 경우는 인터페이스를 이용하여 소통하도록 한다.
    // 디커플링
    // 같은 머신을 사용하지만 다른 우유 거품기나 캐러맬 기기를 사용할 수 있게 됐다. (Fancy, Pro, etc...)
    const fancyMilkMaker = new FancyMilkSteamer()
    const fancyCaramelMaker = new FancyCaramelMaker()
    const fancyLatteMachine = new CaffeLatteMaker(12, 5555, fancyMilkMaker)
    const fancyCaramelCoffeeMachine = new CaramelCoffeeMaker(12, fancyCaramelMaker)


    // 우유 거품 기기 인터페이스
    interface MilkFrothier {
        addMilk(cup: CoffeeCup): CoffeeCup
    }

    // 캐러맬 기기 인터페이스
    interface CaramelProvider {
        addCaramel(cup: CoffeeCup): CoffeeCup
    }
}

// Composition - 2
{
    // 우유와 캐러맬 기기를 인터페이스로 만들었기 때문에 각각에 해당하는 머신을 만들 필요가 없다.
    // '커피 머신' 자체에 각각 원하는 기기를 추가하여 사용하면 되기 때문!

    type CoffeeCup = {
        shots: number
        hasMilk?: boolean
        hasCaramel?: boolean
    }

    interface CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup
    }

    interface MilkFrothier {
        addMilk(cup: CoffeeCup): CoffeeCup
    }

    interface CaramelProvider {
        addCaramel(cup: CoffeeCup): CoffeeCup
    }

    class CoffeeMaker implements CoffeeMachine {
        private static BEANS_PER_SHOT: number = 7

        private coffeeBeans: number = 0

        public constructor(
            coffeeBeans: number,
            // 커피 머신에서 milk frothier 와 caramel provider 를 인자로 받는다.
            public milkFrothier: MilkFrothier,
            public caramelProvider: CaramelProvider
        ) {
            this.coffeeBeans = coffeeBeans
        }

        fillCoffeeBeans(beans: number) {
            if (beans <= 0) {
                throw new Error('1개 이상의 커피콩을 넣어주세요!')
            }
            this.coffeeBeans += beans
        }

        private grindBeans(shots: number) {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_PER_SHOT) {
                throw new Error('커피콩이 부족합니다!')
            }
            console.log(`${shots}샷을 위해 콩을 갈고 있습니다...`)
        }

        private heat(): void {
            console.log('물을 데우고 있습니다...')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`${shots}샷 커피를 추출하고 있습니다...`)
            return {shots, hasMilk: false}
        }

        clean(): void {
            console.log('기계를 청소하고 있습니다...')
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots)
            this.heat()
            const coffee = this.extract(shots)
            // 받은 frothier 와 provider 의 add 함수를 실행 (인터페이스)
            const latte = this.milkFrothier.addMilk(coffee)
            return this.caramelProvider.addCaramel(latte)
        }
    }

    // 우유와 캐러맬을 넣지 않는 경우의 기기를 만든다.
    class NoMilk implements MilkFrothier {
        addMilk(cup: CoffeeCup): CoffeeCup {
            return cup
        }
    }

    class NoCaramel implements CaramelProvider {
        addCaramel(cup: CoffeeCup): CoffeeCup {
            return cup
        }
    }

    class CheapMilkSteamer implements MilkFrothier {
        private steamMilk(): void {
            console.log('우유거품을 내고 있습니다...')
        }

        addMilk(cup: CoffeeCup): CoffeeCup {
            return {...cup, hasMilk: true}
        }
    }

    class FancyMilkSteamer implements MilkFrothier {
        private steamMilk(): void {
            console.log('우유거품을 내고 있습니다...')
        }

        addMilk(cup: CoffeeCup): CoffeeCup {
            return {...cup, hasMilk: true}
        }
    }

    class ProMilkSteamer implements MilkFrothier {
        private steamMilk(): void {
            console.log('우유거품을 내고 있습니다...')
        }

        addMilk(cup: CoffeeCup): CoffeeCup {
            return {...cup, hasMilk: true}
        }
    }

    class CaramelMaker implements CaramelProvider {
        private makeCaramel(): void {
            console.log('캐러맬을 만들고 있습니다...')
        }

        addCaramel(cup: CoffeeCup): CoffeeCup {
            return {...cup, hasCaramel: true}
        }
    }

    class FancyCaramelMaker implements CaramelProvider {
        private makeCaramel(): void {
            console.log('캐러맬을 만들고 있습니다...')
        }

        addCaramel(cup: CoffeeCup): CoffeeCup {
            return {...cup, hasCaramel: true}
        }
    }

    // Milk
    const noMilkMaker = new NoMilk()
    const fancyMilkMaker = new FancyMilkSteamer()
    const cheapMilkMaker = new CheapMilkSteamer()

    // Caramel
    const noCaramelMaker = new NoCaramel()
    const caramelMaker = new CaramelMaker()
    const fancyCaramelMaker = new FancyCaramelMaker()

    // Coffee machine
    const caramelCoffeeMachine = new CoffeeMaker(12, noMilkMaker, caramelMaker)
    const latteMachine = new CoffeeMaker(12, cheapMilkMaker, noCaramelMaker)
    const caramelLatteMachine = new CoffeeMaker(12, cheapMilkMaker, caramelMaker)

    const fancyLatteMachine = new CoffeeMaker(12, fancyMilkMaker, noCaramelMaker)
    const fancyCaramelCoffeeMachine = new CoffeeMaker(12, noMilkMaker, fancyCaramelMaker)

}
