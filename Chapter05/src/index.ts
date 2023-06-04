let array = new Array
array.push(1); array.push(2); array.push(3);
console.log(array)

let numbers = [1,2,3]
let numArray: number[] = [1,2,3]
let strArray: string[] = ['a','b','c']

type IPerson = {name:string, age?:number}
let personArray: IPerson[] = [{name:'jacl'},{name:'ben',age:10}]

console.log(personArray)

const split = (str:string,delim:string=''):string[] => str.split(delim)
console.log(split('Hello'))

const join = (str:string[],delim:string=''):string => str.join(delim)
console.log(join(['w','o','r','l','d']))

const numberArr: number[] = [1,2,3,4,5]
for(let i=0; i<numArray.length; i++){
  const item: number = numberArr[i]
  console.log(item)
}

let arr:number[] = [1,2,3,4]
let first:number = arr[0]
let [a,b,c,d] = arr

const numbers2: number[] = [1,2,3,4,5];
for(let index: number = 0; index < numbers.length; index++){
  const item: number = numbers2[index];
  console.log(item);
}

let names : string[] = ['jacl','jane','steve'];

for(let index in names){
  const name: string = names[index];
}


const arrayLength = <T>(array: T[]) => array.length

type IPerson2 = {name: string, age?: number};
let personArray2 : IPerson2[] = [{name:'Jack'},{name:'name',age:10}]

const range = (from: number, to: number) : number[] =>
  from < to ? [from, ...range(from + 1, to)] : []

let numbers3 : number[] = range(1,10)
console.log(numbers3)

const fold = <T>(array: T[], callback: (result: T, val: T) => T,initValue:T) => {
  let result: T = initValue
  for(let i=0; i<array.length; ++i){
    const value = array[i]
    result = callback(result, value)
  }
  return result
}

let numbers4: number[] = range(1,100+1)
console.log(numbers4)

let result = fold(numbers4, (result, value) => result + value, 0)
console.log(result)

const map = <T,Q>(array:T[], callback: (value: T, index?:number) => Q) : Q[] => {
  let result: Q[] = [];
  for(let index=0; index < array.length; ++index){
    const value = array[index];
    result = [...result, callback(value, index)]
  }
  return result;
}

function pure(a: number, b: number): number {return a+b}
function impure(array:number[]):void {
  array.push(1)
  array.splice(0,1)
}

let g = 10
function impure2(x: number) {return x + g}

let original = 1
const oArray:number[] = [1,2,3,4]
const copied:number[] = [...oArray];
oArray[0] = 0;
console.log(oArray,copied)

const pureSort = <T>(array: readonly T[]): T[] => {
  let deepCopied = [...array]
  return deepCopied
}

const pureDelete = <T>(array: readonly T[], cb:(val:T, index?:number) => boolean):T[] => 
  array.filter((val,index) => cb(val, index) == false)

let tuple:any[] = [true, 'the result is ok']

const array2: number[] = [1,2,3,4]
const tuple2: [boolean, string] = [true, 'the result is ok']

type ResultType = [boolean, string]

const doSomething = (): ResultType => {
  try{
    throw new Error('some error is occurs...')
  }catch(e){
    return [false, e.message]
  }
}

const [result2, errorMessage] = doSomething();
console.log(result, errorMessage)