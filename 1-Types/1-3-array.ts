{
    // Array
    const fruits = ['π', 'π', 'π']
    const scores: Array<number> = [1, 3, 4]

    // object μ λΆλ³μ± λ³΄μ₯
    function printArray(fruits: readonly string[]) {
        // fruits.push('π©') λ³κ²½ λΆκ°λ₯
    }

    // Tuple -> interface, type alias, class
    let student: [string, number]
    student = ['soo', 24]
    student[0] // name
    student[1] // 24
    const [name, age] = student
}
