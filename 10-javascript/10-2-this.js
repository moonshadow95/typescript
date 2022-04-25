console.log(this) // Window

function simpleFnc() {
  console.log(this)
}

simpleFnc() // Window

class Counter {
  count = 0
  // increase = function () {
  //   console.log(this)
  // }

  // 함수를 선언할 때 arrow function 을 이용하면 선언될 당시의 스코프의 this 를 기억한다.
  increase = () => {
    console.log(this)
  }
}

const counter = new Counter()
counter.increase() // Counter

// const, let 을 사용하여 변수를 등록하게 되면 window 객체에 등록되지 않는다.
// const caller = counter.increase
// caller() // this -> undefined

// 정보를 잃어버리지 않으려면 bind(counter) 를 사용하여 counter 오브젝트와 바인딩을 해준다.
// const caller = counter.increase.bind(counter)
// caller() // this -> undefined

// var 를 사용하면 window 에 등록이 된다.
var badVar = 'bad'
window.badVar

class Bob {
}

const bob = new Bob()
bob.run = counter.increase
bob.run() // this -> Bob()
