{
    // every() 사용해보기
    class Animal {
    }

    class Cat extends Animal {
        isCat: boolean = true
    }

    class Dog extends Animal {
        isDog: boolean = true
    }

    const animals: Animal[] = [new Cat(), new Dog(), new Dog()]

    // 인자로 받은 animal 이 Cat 타입인 경우 반환한다.
    function isCat(animal: Animal): animal is Cat {
        return (animal as Cat).isCat !== undefined
    }

    // callback 함수를 전달하여 Cat 인지 아닌지 타입을 확인한다.
    animals.every<Cat>(isCat)
}
