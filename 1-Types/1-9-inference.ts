{
    // Type Inference
    let text = 'hello'

    function print(message = 'hello') {
        console.log(message)
    }

    // default 값이 string 이므로 message 가 string 일 것으로 추론
    print('hello')

    // print(10)

    function add(x: number, y: number) {
        return x + y
    }

    const result = add(1, 2) // number 인자만 받기 때문에 number 를 return 할 것으로 추론
    console.log(result)
}