function  add(x:number,y:number,z?:number) :number{
    return x+y
}
let result=add(2,3,3);
// let result=add(2,3,3);
/* function.ts:5:20 - error TS2554: Expected 2 arguments, but got 3.

5 let result=add(2,3,3);
                     ~ */
//           函数声明类型                    返回类型
const add2:(x:number,y:number,z?:number)=>number=add;