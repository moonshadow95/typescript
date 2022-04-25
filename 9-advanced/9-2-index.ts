{
    const obj = {
        name: 'soo'
    }
    // obj.name // 'soo'
    // obj[name] // 'soo'

    type Animal = {
        name: string
        age: number
        gender: 'male' | 'female'
    }

    type Name = Animal['name'] // string

    const text: Name = 'hello'

    type Gender = Animal['gender'] // 'male'|'female'

    type Keys = keyof Animal // 'name'|'age'|'gender'

    const key: Keys = 'gender'

    type Person = {
        name: string
        gender: Animal['gender']
    }
    const Person: Person = {
        name: 'soo',
        gender: 'female'
    }
}
