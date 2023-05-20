interface IPerson2 {
  name: string
  age: number
  etc?: boolean
}

let good1: IPerson2 = {name: 'Jack', age: 32}
let good2: IPerson2 = {name: 'Jack', age: 32, etc:true}

let ai: {
  name: string
  age: number
  etc?: boolean
} = {name:'Jack', age:32}

function printMe(me: {name: string, age: number, etc?: boolean}){
  console.log(me.etc ? `${me.etc}` : `${me.name}`)
}

printMe(ai)