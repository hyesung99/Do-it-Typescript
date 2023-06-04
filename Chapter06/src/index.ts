const numArray: number[] = [1,2,3]
for(let value of numArray) console.log(value)

const  createRangeIterable = (from: number, to: number) => {
  let currentValue = from
  return{
    next() {
      const value = currentValue < to ? currentValue++ : undefined
      const done = value === undefined
      return {value, done}
    }
  }
}

const iterator = createRangeIterable(1,3+1)

class StringIterable implements Iterable<string>{
  constructor(private strings: string[] = [], private currentIndex: number = 0){}
  [Symbol.iterator](): Iterator<string>{
    const that = this
    let currentIndex = that.currentIndex, length = that.strings.length

    const iterator: Iterator<string> = {
      next() : {value: string, done: boolean}{
        const value = currentIndex < length ? that.strings[currentIndex++] : ''
        const done = value == undefined
        return {value, done}
      }
    }
    return iterator
  }
}

function* generator() {
  console.log('genertor started...')
  let value = 1
  while(value < 4)
    yield value++
  console.log('genertor finished...')
}

for(let value of generator()){
  console.log(value)
}

function* rangeGenerator(from: number, to: number){
  let value = from
  while(value < to){
    yield value++
  }
}

