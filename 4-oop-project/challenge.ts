// Challenge
{
    // Stack 구현하기
    // 기본 제공 자료구조 (배열) 이용하지 않고 구현할 것
    // 단일 연결 리스트 -> 아이템이 들어오면 아이템을 감싸는 노드를 만들고 헤드가 노드를 가리킨다.
    // node > next + item

    // 1. Stack interface
    // push, pop, size
    interface Stack {
        // 값을 받아서 스택에 추가, 리턴 값 없음
        push(value: string): void

        // 제일 마지막 요소 리턴
        pop(): string

        // 스택에 담긴 요소 개수 -> 변경할 수 없다.
        readonly size: number
    }

    // 2. Stack's node
    // Node 는 데이터를 담고있는 데이터 타입이기 때문에 type 으로 정의함
    type Node = {
        // 한번 만들어지면 변경되지 않는다.
        readonly value: string
        // 다음 노드를 가리킨다. 마지막 노드거나 스택이 비어있을 경우에는 없을 수 있다.
        readonly next?: Node
    }

    class StackImpl implements Stack {
        // 0 부터 시작
        private _size: number = 0
        private head?: Node

        // 생성자 함수
        // 생성시 인자로 받은 capacity 로 최대 사이즈를 지정한다.
        // 생성자의 매개변수로 받은 값을 객체의 프로퍼티로 사용하기 위해 접근 제한자를 사용한다.
        constructor(private capacity: number) {
        }

        // getter, setter 를 사용하면 클래스의 속성에 대한 접근을 제어할 수 있다.
        // size 는 외부에서 변경할 수 없으므로 getter 만 설정한다.
        get size() {
            return this._size
        }

        push(value: string): void {
            // 생성시 설정한 최대 값에 도달하면 에러 발생
            if (this._size === this.capacity) {
                throw Error('스택이 가득 찼습니다!')
            }

            // 새로운 노드 생성 -> value 는 전달받은 값, 새로운 노드의 next 는 stack 의 헤드가 가리키고 있던 노드
            const node: Node = {value, next: this.head}
            // stack 의 head 는 새로운 노드를 가리킴
            this.head = node
            // push() 호출 시 size +1
            this._size++
        }

        pop(): string {
            // 비어있는 경우 -> head 없음 -> pop() 호출 시 에러 발생
            if (!this.head) {
                throw Error('스택이 비어있습니다!')
            }
            // 마지막 노드는 헤드가 가리키고 있는 노드
            const node = this.head
            // stack 의 head 는 다음 노드를 가리킨다.
            this.head = node.next

            // pop() 호출 시 size -1
            this._size--
            return node.value
        }
    }

    const myStack = new StackImpl(3)
    myStack.push('1')
    myStack.push('2')
    myStack.push('3')
    // myStack.push('4')
    while (myStack.size >= 0) {
        console.log(myStack.pop())
    }
}
