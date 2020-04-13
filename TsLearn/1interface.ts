

interface Person {
  readonly id:number;
  name:string;
  age?:number;
}

let Ekko:Person={
  id:123,
  name:"123",
  age:20,
}
// Ekko.id=233
/* src/interface.ts:14:6 - error TS2540: Cannot assign to 'id' because it is a read-only property.

14 Ekko.id=233 */