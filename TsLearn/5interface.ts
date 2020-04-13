//接口 继承
interface Radio{
  switchRadio():void//void  不返回
}

interface Battery{
  checkBattery();
}
//抽象类的属性的方法
interface C extends Radio{
  checkBattery()
}
class Car implements Radio{
  switchRadio(){
    
  }
}
//接口 分割 
//class Cellphone implements Radio,Battery{
class Cellphone implements C {
  switchRadio(){

  }
  checkBattery(){

  }
}