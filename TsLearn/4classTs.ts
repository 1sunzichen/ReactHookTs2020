//类：静态 修饰符
class Animal {
  //private names:string;  不能访问
  //protected names:string;  只能子类使用
  readonly names:string;// 只读
  static categoies:string[]=['maimal','bird'];//静态属性
  static isAnimal(a){//静态方法
    return a instanceof Animal
  }
  constructor(names: string){
    this.names=names
  }
  run(){
    return `${this.names} is runin1g`
  }
}
const snake=new Animal("123")
console.log(Animal.categoies,Animal.isAnimal(snake));

// console.log(snake.names);
// snake.names='jack';
// console.log(snake.names);


