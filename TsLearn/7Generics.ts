//泛型 <> 这是函数的 类型定义符号
function echo<T>(params:T):T {
  return params;
}

const str:string='str';
const result=echo(str);
// const result=echo("str");


function swap<T,U>(params:[T,U]):[U,T] {
  return [params[1],params[0]]
}
const res=swap(['string',123])