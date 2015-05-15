function somar(a: number, b: number) {
  return a + b;
}

console.log(somar(3,2));
console.log(somar(3,'Suissa'));
// ex02.ts(6,21): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
