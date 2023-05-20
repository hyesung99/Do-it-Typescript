let printMe: (name:string, age:number) => void = function (name: string, age: number): void {}

type stringNumberFunc = (name:string, age:number) => void

let pringMe: stringNumberFunc = (name,age) => {
  console.log(name,age)  
}

let add = new Function('a','b', 'return a+b')
let result = add(1,2)
console.log(result)

let add2 = function(a:number,b:number) {
  return a+b
}

console.log(add2(1,2))

const arrow1 = (a: number, b: number): number => {return a+b}

//04-5
type Person = {name:string, age:number}

const makePerson = (name:string, age:number=10): Person => {
  const person = {name: name, age: age}
  return person
}
console.log(makePerson('jack'))

const makePerson2 = (name: string, age:number=10):Person => {
  return {name,age}
}
console.log(makePerson2('jack2'))

const printPerson = ({name,age}:Person): void =>{
  console.log('hi')
}

