{
    // Array
    const fruits = ['🍓', '🍊', '🍒']
    const scores: Array<number> = [1, 3, 4]

    // object 의 불변성 보장
    function printArray(fruits: readonly string[]) {
        // fruits.push('💩') 변경 불가능
    }

    // Tuple -> interface, type alias, class
    let student: [string, number]
    student = ['soo', 24]
    student[0] // name
    student[1] // 24
    const [name, age] = student
}
