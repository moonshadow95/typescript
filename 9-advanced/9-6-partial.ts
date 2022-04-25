{
    type ToDo = {
        title: string
        description: string
        label: string
        priority: 'high' | 'low'
    }

    // 특정 부분만 업데이트하는 함수
    // Partial utility type 사용
    function update(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
        return {
            ...todo, ...fieldsToUpdate
        }
    }

    const todo: ToDo = {
        title: 'learn TS',
        description: 'study hard',
        label: 'study',
        priority: 'high'
    }
    const updated = update(todo, {priority: 'low'})
    console.log(updated)
    // {
    //   title: 'learn TS',
    //   description: 'study hard',
    //   label: 'study',
    //   priority: 'low'
    // }
}
