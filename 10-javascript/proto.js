const x = {}
const y = {}
console.log(x)
console.log(y)
console.log(x.___proto___ === y.___proto___) // true -> 같은 프로토타입을 사용한다.

const array = []
console.log(array) // array.length(), concat() 등 기본 함수를 사용할 수 있다.
// Array 라는 proto 를 가지고있고 Array proto 안에는 Object 라는 proto 가 있다.
// 자바스크립트의 모든 오브젝트는 Object 라는 proto 를 가지고 있다.

function CoffeeMachine(beans) {
  this.beans = beans
  // Instance member level
  // this.makeCoffee = () => {
  //   console.log('making...')
  // }
  // 각각의 인스턴스마다 포함이 된다.
  //CoffeeMachine {beans: 10, makeCoffee: ƒ}
  // beans: 10
  // makeCoffee: () => { console.log('making...
}

// Prototype member level
// 프로토타입에 함수를 포함시켜서 한번만 만들고 싶다면 프로토타입에 정의한다.
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making...')
}
// CoffeeMachine {beans: 10}
// beans: 10
//   [[Prototype]]: Object
// makeCoffee: (shots) => { console.log('making...') }
// constructor: ƒ CoffeeMachine(beans)
//   [[Prototype]]: Object

const machine1 = new CoffeeMachine(10)
const machine2 = new CoffeeMachine(10)

console.log(machine1)
console.log(machine2)

function LatteMachine(milk) {
  this.milk = milk
}

// 라떼머신의 포로토타입에 커피머신 프로토타입을 생성한다.
// 커피머신 프로토타입은 오브젝트 프로토타입을 상속하고 그곳에 makeCoffee 함수를 만들었으므로 라떼머신에서도 makeCoffee() 를 사용할 수 있다.
LatteMachine.prototype = Object.create(CoffeeMachine.prototype)
const latteMachine = new LatteMachine(123)
console.log(latteMachine)
// LatteMachine {milk: 123}
// milk: 123
// [[Prototype]]: CoffeeMachine
// [[Prototype]]: Object
// makeCoffee: (shots) => { console.log('making...') }
// constructor: ƒ CoffeeMachine(beans)
// [[Prototype]]: Object
