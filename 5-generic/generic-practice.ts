// Function be Generic
{
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw Error('not valid number!')
        }
        return arg
    }

    function checkNotNullAnyBad(arg: any | null): any {
        if (arg == null) {
            throw Error('not valid number!')
        }
        return arg
    }

    // generic 을 사용하면 인자로 받은 타입을 리턴 타입으로 지정하여
    // 동적으로 타입을 결정할 수 있다.
    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw Error('not valid number!')
        }
        return arg
    }

    const number = checkNotNull(123)
    const bool: boolean = checkNotNull(true)
}

// Class be Generic
{
    // 두 인자의 왼쪽, 오른쪽 값을 가지는 클래스를 만들어본다.

    // 인터페이스 생성
    // 제네릭으로 두개의 인자 설정
    interface Either<L, R> {
        // 각 타입은 L, R 의 타입으로 동적으로 결정된다.
        left: () => L
        right: () => R
    }

    // 클래스 생성
    class SimpleEither<L, R> implements Either<L, R> {
        // 생성자에서 받은 매개변수를 객체의 프로퍼티로 사용한다.
        constructor(private leftValue: L, private rightValue: R) {

        }

        left(): L {
            return this.leftValue
        }

        right(): R {
            return this.rightValue
        }
    }

    const either = new SimpleEither('hi', 123)
    either.left() // 'hi'
    either.right() // 123
}

// Constrains (제약)
{
    // 직원이 있다.
    interface Employee {
        pay(): void
    }

    // 정규직
    class FullTimeEmployee implements Employee {
        // 급여
        pay() {
            console.log('payed for full time')
        }

        // 근무
        workFullTime() {
        }
    }

    // 비정규직
    class PartTimeEmployee implements Employee {
        // 급여
        pay() {
            console.log('payed for part time')
        }

        // 근무
        workPartTime() {
        }
    }

    // 급여 지급 함수 만들기
    function pay(employee: Employee): Employee {
        // 월급 지불
        employee.pay()
        return employee
    }

    // 수 와 종
    const soo = new FullTimeEmployee()
    const jong = new PartTimeEmployee()
    // 각각 풀타임, 파트타임 일을 한다.
    soo.workFullTime()
    jong.workPartTime()

    // 급여 지불
    const sooPayed = pay(soo)
    const jongPayed = pay(jong)
    // 급여를 지불하고 난 sooPayed 는 다시 일을 할 수 있는 workFullTime() 함수를 사용할 수 없다.
    // Because,
    // 급여 지불 함수인 pay() 함수의 리턴값이 Employee 이기 때문에
    // 급여를 지불하고 나면 FullTime, PartTime 성질을 잃어버린 Employee 만 남고
    // 공통으로 가진 함수인 pay() 만 사용할 수 있게 된다.
    // So,
    // 제네릭을 사용하여 동적으로 리턴 타입을 정하면 될 것.

    function genericPay<T extends Employee>(employee: T): T {
        employee.pay()
        return employee
    }

    const sooGenericPayed = genericPay(soo)
    const jongGenericPayed = genericPay(jong)
    // 각자의 타입을 보장받는다.
    sooGenericPayed.workFullTime()
    jongGenericPayed.workPartTime()

    // 각자 다른 key value 를 가진 오브젝트가 있다.
    const obj_1 = {
        name: 'soo',
        age: 24
    }
    const obj_2 = {
        animal: '🦒'
    }
    // 이 오브젝트들의 value 를 가져올 수 있는 함수를 만들어보자.
    // value = obj[key] 를 사용하는데, 각자 key 가 다르다.
    // key 를 generic 하게 받아오면 될 것.
    // K 는 T 의 key 이다.
    function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
        return obj[key]
    }

    getValue(obj_1, 'name')
    getValue(obj_1, 'age')
    getValue(obj_2, 'animal')
}
