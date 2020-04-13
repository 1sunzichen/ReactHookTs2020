class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
//约定泛型
const queue = new Queue<number>()
const queueS = new Queue<string>()
queue.push(1)
// queue.push("str");
queueS.push('str')
console.log(queue.pop().toFixed())
console.log(queueS.pop().length)

interface KeyPair<T, U> {
  k: T
  v: U
}
let kp1: KeyPair<number, string> = { key: 123, value: 'str' }
let kp2: KeyPair<string, number> = { key: 'str', value: 123 }

let arr2Two: Array<number> = [1, 2, 3]

//可以传入 任意类型 对函数进行 实例化
interface Iplus<T> {
  (a: T, b: T): T
}

function plus(a: number, b: number): number {
  return a + b
}

function connect(a: string, b: string): string {
  return a + b
}
const a: Iplus<number> = plus

const b: Iplus<string> = connect
