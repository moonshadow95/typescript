// Challenge
{
    var StackImpl = /** @class */ (function () {
        // 생성자 함수
        // 생성시 인자로 받은 capacity 로 최대 사이즈를 지정한다.
        // 생성자의 매개변수로 받은 값을 객체의 프로퍼티로 사용하기 위해 접근 제한자를 사용한다.
        function StackImpl(capacity) {
            this.capacity = capacity;
            // 0 부터 시작
            this._size = 0;
        }
        Object.defineProperty(StackImpl.prototype, "size", {
            // getter, setter 를 사용하면 클래스의 속성에 대한 접근을 제어할 수 있다.
            // size 는 외부에서 변경할 수 없으므로 getter 만 설정한다.
            get: function () {
                return this._size;
            },
            enumerable: false,
            configurable: true
        });
        StackImpl.prototype.push = function (value) {
            // 생성시 설정한 최대 값에 도달하면 에러 발생
            if (this._size === this.capacity) {
                throw new Error('스택이 가득 찼습니다!');
            }
            // 새로운 노드 생성 -> value 는 전달받은 값, 새로운 노드의 next 는 stack 의 헤드가 가리키고 있던 노드
            var node = { value: value, next: this.head };
            // stack 의 head 는 새로운 노드를 가리킴
            this.head = node;
            // push() 호출 시 size +1
            this._size++;
        };
        StackImpl.prototype.pop = function () {
            // 비어있는 경우 -> head 없음 -> pop() 호출 시 에러 발생
            if (!this.head) {
                throw Error('스택이 비어있습니다!');
            }
            // 마지막 노드는 헤드가 가리키고 있는 노드
            var node = this.head;
            // stack 의 head 는 다음 노드를 가리킨다.
            this.head = node.next;
            // pop() 호출 시 size -1
            this._size--;
            return node.value;
        };
        return StackImpl;
    }());
    var myStack = new StackImpl(3);
    myStack.push('1');
    myStack.push('2');
    myStack.push('3');
    // myStack.push('4')
    while (myStack.size >= 0) {
        console.log(myStack.pop());
    }
}
