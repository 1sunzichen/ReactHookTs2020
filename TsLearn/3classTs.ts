//类：继承
class Animal {
  names:string;
 
  constructor(names: string){
    this.names=names
  }
  run(){
    return `${this.names} is runin1g`
  }
}
const snake=new Animal("123")
console.log(snake.run());

class Dog extends Animal{
  bark(){
    return `${this.names}`
  }
}
const baobao=new Dog('xiaobao')
console.log(baobao.run());

class Cat extends Animal{
  constructor(names){
    super(names)
    console.log(this.names);
    
  }
  run(){
    return 'Meow'+super.run()
  }
}

const maomao=new Cat('9999');
console.log(maomao.run());
