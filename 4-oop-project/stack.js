var StackImpl = /** @class */ (function () {
    function StackImpl(capacity) {
        this.capacity = capacity;
    }
    Object.defineProperty(StackImpl.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    StackImpl.prototype.push = function (value) {
        // 처음 정한 사이즈를 넘기려 할 때 에러
        if (this.size === this.capacity) {
            throw new Error('Stack is full!');
        }
        // 새로 들어온 노드는 헤드가 원래 가리키고 있던 노드를 가리킨다.
        var node = { value: value, next: this.head };
        // 헤드는 새로 생긴 노드를 가리킨다.
        this.head = node;
        // 전체 사이즈 증가
        this._size++;
    };
    StackImpl.prototype.pop = function () {
        // 스택이 비어있는 경우 없을 수도 있다.
        if (this.head == null) {
            throw new Error('Stack is empty!');
        }
        // 헤드가 가리키고 있는 노드의 값을 꺼낸다.
        var node = this.head;
        // 헤드는 다음 노드를 가리킨다.
        this.head = node.next;
        // 전체 사이즈 감소
        this._size--;
        // 노드의 값 리턴
        return node.value;
    };
    return StackImpl;
}());
var stack = new StackImpl(4);
stack.push('soo1');
stack.push('soo2');
stack.push('sooooo3');
stack.push('sooooo3');
while (stack.size !== 0) {
    console.log(stack.pop());
}
