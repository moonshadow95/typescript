type PositionType = {
    x: number
    y: number
}

interface PositionInterface {
    x: number
    y: number
}

// 인터페이스는 같은 이름으로 한번 더 정의하면 두개가 합쳐진다. x,y,z 모두 가짐
// interface PositionInterface {
//     z: number
// }

// Object
const obj_1: PositionType = {
    x: 1,
    y: 1
}
const obj_2: PositionInterface = {
    x: 1,
    y: 1
}

// Class
class Pos1 implements PositionType {
    x: number
    y: number
}

class Pos2 implements PositionInterface {
    x: number
    y: number
}

// Extends (확장)
interface ZPositionInterface extends PositionInterface {
    z: number
}

type ZPositionType = PositionType & { z: number }

// Type aliases can use computed properties!
type Person = {
    name: string
    age: number
}
type Name = Person['name'] // string
type NumberType = number
