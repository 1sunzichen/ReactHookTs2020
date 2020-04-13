//类型别名
type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
  return x + y
}
const sum2: PlusType = sum

type NameRsolver = () => string
type NameOrRsolver = string | NameRsolver

function getName(n: NameOrRsolver): string {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
