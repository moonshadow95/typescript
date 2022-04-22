{
    type Video = {
        title: string
        author: string
    }
    type Optional<T> = {
        [P in keyof T]?: T[P]
    }
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    }

    type VideoOptional = Optional<Video>
    type Animal = {
        name: string
        age: number
    }
    const animal: Optional<Animal> = {
        name: 'dog'
    }
    animal.name = 'cat'
    const video: ReadOnly<Video> = {
        title: 'good',
        author: 'better'
    }
    // video.title = 'bad' -> readonly 적용됨

    // type VideoOptional = {
    //     title?:string
    //     author?: string
    // }
    //
    // type VideoReadOnly={
    //     readonly title: string
    //     readonly author: string
    // }

    // null 도 가능하도록 함
    type Nullable<T> = { [P in keyof T]: T[P] | null }
    const obj2: Nullable<Video> = {
        title: 'hi',
        author: null
    }

    type Proxy<T> = {
        get(): T
        set(value: T): void
    }
    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>
    }
}
