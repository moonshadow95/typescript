{
    //Type Alias
    type Text = string
    const name: Text = 'soo'
    const address: Text = 'korea'
    type Num = number
    type Student = {
        name: string
        age: number
    }
    const student: Student = {
        name: 'soo',
        age: 24
    }

    // String Literal Types
    type Name = 'name'
    let sooName: Name
    sooName = 'name'
    type Json = 'json'
    const json: Json = 'json'

    type Bool = true
    // const isCat: Bool = false
}
