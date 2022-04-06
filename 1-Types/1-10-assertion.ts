{
    // Type Assertion 💩
    function jsStrFnc(): any {
        return 'hello'
    }

    const result = jsStrFnc()
    console.log((result as string).length)
    console.log((<string>result).length)

    const wrong: any = 5
    console.log((wrong as Array<number>).push(10)) // 💩

    function findNumbers(): number[] | undefined {
        return undefined
    }

    const numbers = findNumbers()
    // numbers.push(2) // 💩
    numbers!.push(2)
}