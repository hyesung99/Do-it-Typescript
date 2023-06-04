import { getFileNameAndNumber } from "../utils/getFileNameAndNumber";

const [filename, numberOfFakeitems] = getFileNameAndNumber('data/fake.csv',10000)
console.log(filename, numberOfFakeitems)