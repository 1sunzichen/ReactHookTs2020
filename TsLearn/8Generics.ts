
//泛型
function echoWithArr<T>(params:T[]):T[] {
  console.log(params.length);
  return params;
}
const arr=echoWithArr([1,2,3])

interface IWithLength{
  length:number
}
//约束泛型
function echoWithLength<T extends IWithLength>(params:T):T {
    console.log(params.length);
    return params;
}
const arr2=echoWithLength([1,2,3])
const arr3=echoWithLength({length:10})