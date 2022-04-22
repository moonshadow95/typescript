// Error -> 예상할 수 있는 에러 케이스
// Exception -> 예상할 수 없는 상태

// Java: Exception
// JavaScript: Error
{
    /**
     * Let's make a game 🕹
     */

    type Position = {
        x: number
        y: number
    }

    // 개발자가 where 라는 타입이 추가했다면 컴파일 단계에서 에러가 발생하여 수정할 수 있도록 한다.
    type Direction = 'up' | 'down' | 'left' | 'right' | 'where'

    let position: Position = {x: 0, y: 0}

    function move(direction: Direction) {
        switch (direction) {
            case 'up':
                position.y += 1
                break
            case 'down':
                position.y -= 1
                break
            case 'left':
                position.x -= 1
                break
            case 'right':
                position.x += 1
                break
            case "where":
                return
            default:

                const invalid: never = direction
                throw new Error(`unknown direction ${direction}.`)

        }
    }

    console.log(position); // { x: 0, y: 0}
    move('up');
    console.log(position); // { x: 0, y: 1}
    move('down');
    console.log(position); // { x: 0, y: 0}
    move('left');
    console.log(position); // { x: -1, y: 0}
    move('right');
    console.log(position); // { x: 0, y: 0}
}

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
    if (fileName === 'not exist!') {
        // 가능한 자세하게 에러 메세지 전달
        throw Error(`file not exist! ${fileName}`)
    }
    return 'file contents'
}

function closeFile(fileName: string) {
    //
}

// 에러 핸들링 없이 실행하면 에러가 발생하면서 어플리케이션이 죽는다.
// const fileName = 'not exist!'
// console.log(readFile(fileName))
// closeFile(fileName)

// try 안의 코드를 실행하다 에러가 발생하면 catch 로 넘어가서 코드를 실행한다.
// try 내부 코드의 성공 여부와 관계없이 실행해야 하는 코드가 있다면 finally 내부에 작성한다.
const fileName = 'not exist!'
try {
    console.log(readFile(fileName))
} catch (error) {
    console.log('erorr catch!')
} finally {
    console.log('finally!')
}
console.log('ing...')
closeFile(fileName)
