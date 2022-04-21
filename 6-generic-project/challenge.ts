// Challenge
{
    // 구현했던 Stack 은 string 만 사용할 수 있다.
    // 제네릭을 적용해보자.
    interface Stack<T> {
        push(value: T): void

        pop(): T

        readonly size: number
    }

    type Node<T> = {
        readonly value: T
        readonly next?: Node<T>
    }

    class StackImpl<T> implements Stack<T> {
        private _size: number = 0
        private head?: Node<T>

        constructor(private capacity: number) {
        }

        get size() {
            return this._size
        }

        push(value: T): void {
            if (this._size === this.capacity) {
                throw Error('스택이 가득 찼습니다!')
            }

            const node: Node<T> = {value, next: this.head}
            this.head = node
            this._size++
        }

        pop(): T {
            if (!this.head) {
                throw Error('스택이 비어있습니다!')
            }
            const node = this.head
            this.head = node.next

            this._size--
            return node.value
        }
    }

    const stringStack = new StackImpl<string>(3)
    stringStack.push('1')
    stringStack.push('2')
    stringStack.push('3')
    while (stringStack.size >= 0) {
        console.log(stringStack.pop())
    }

    const numberStack = new StackImpl<number>(3)
    numberStack.push(1)
    numberStack.push(2)
    numberStack.push(3)
    while (numberStack.size >= 0) {
        console.log(numberStack.pop())
    }
}
