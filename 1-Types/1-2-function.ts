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

}