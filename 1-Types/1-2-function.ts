{
    // JavaScript 💩
    function jsAdd(num1, numb2) {
        return num1 + numb2
    }

    // TypeScript ✨
    function add(num1: number, numb2: number): number {
        return num1 + numb2
    }

    // JavaScript 💩
    function jsFetchNum(id) {
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100)
        })
    }

    // TypeScript ✨
    function fetchNum(id: string): Promise<number> {
        // code...
        // code...
        return new Promise((resolve, reject) => {
            resolve(100)
        })
    }

    // JavaScript -> TypeScript ✨
    // Optional parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName)
        console.log(lastName)
    }

    printName('soo', 'su')
    printName('soo')
    printName('soo', undefined)

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message)
    }

    printMessage('message')
    printMessage()

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b)
    }

    console.log(addNumbers(1, 2, 3, 4))
}