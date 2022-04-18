{
    // 배열이 아닌 단일 연결 리스트를 사용하여 구현한다.
    // 단일 연결 리스트 -> 아이템이 들어오면 아이템을 감싸는 노드를 만들고 헤드가 그 노드를 가리킨다.
    // 노드는 아이템(value)과 다음 노드를 가리키는 next 를 가지고 있다.
    interface Stack {
        readonly size: number

        push(value: string): void

        pop(): string

    }

    type StackNode = {
        value: string
        next?: StackNode
    }

    class StackImpl implements Stack {
        // size -> readonly 이지만 내부에서 변경해야 하기 때문에 setter 없이 getter 만 사용한다.
        // 변수명에 _(under bar)가 붙어있으면 내부에서만 쓰이는 변수라는 의미
        private _size: number
        private head?: StackNode

        constructor(private capacity: number) {
        }

        get size() {
            return this._size
        }

        push(value: string): void {
            // 처음 정한 사이즈를 넘기려 할 때 에러
            if (this.size === this.capacity) {
                throw new Error('Stack is full!')
            }

            // 새로 들어온 노드는 헤드가 원래 가리키고 있던 노드를 가리킨다.
            const node: StackNode = {value, next: this.head}
            // 헤드는 새로 생긴 노드를 가리킨다.
            this.head = node
            // 전체 사이즈 증가
            this._size++
        }

        pop(): string {
            // 스택이 비어있는 경우 없을 수도 있다.
            if (this.head == null) {
                throw new Error('Stack is empty!')
            }
            // 헤드가 가리키고 있는 노드의 값을 꺼낸다.
            const node = this.head
            // 헤드는 다음 노드를 가리킨다.
            this.head = node.next
            // 전체 사이즈 감소
            this._size--
            // 노드의 값 리턴
            return node.value
        }
    }

    const stack = new StackImpl(4)
    stack.push('soo1')
    stack.push('soo2')
    stack.push('sooooo3')
    stack.push('sooooo3')
    while (stack.size !== 0) {
        console.log(stack.pop())
    }
}