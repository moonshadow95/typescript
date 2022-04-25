{
    type ToDo = {
        title: string
        description: string
    }

    // 보여주기만 하는 함수이므로 Readonly 유틸리티 타입을 사용하여 불변성을 보장한다.
    function display(todo: Readonly<ToDo>) {
        // todo.title = 'lalala'
    }

    // -? -> ? 와 반대로 필수라는 의미
    // type Required<T> = {
    //     [P in keyof T]-?: T[P];
    // };
}
