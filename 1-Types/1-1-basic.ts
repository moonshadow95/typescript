{

    // JavaScript
    // Primitive: number, string, boolean, bigint, symbol, null, undefined, null
    // Object: function, array ...

    // number
    const num: number = 3

    // string
    const str: string = 'string'

    // boolean
    const bool: boolean = false

    // undefined
    let age: number | undefined
    age = 1

    function find(): number | undefined {
        return undefined
    }

    // null
    let person: null // 💩
    let person2: string | null

    // unknown 💩
    let notSure: unknown = 0
    notSure = 'not sure'
    notSure = true

    // any 💩
    let anything: any = 0
    anything = 'any'

    // void
    function print(): void {
        console.log('print')
        return
    }

    // never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message)
        while (true) {
        }
    }

    let never: never // 💩

    // object
    let obj: object // 💩

    function acceptObject(obj: object) {
    }

    acceptObject({name: 'person'})
    acceptObject({name: 'dog'})
}
