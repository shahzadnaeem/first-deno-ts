import { one, two } from "./lib/lib.ts"
import { ONE, TWO, plusser } from "./lib/lib2.ts"

const plussed:number = plusser(one(), two(), ONE(), TWO())

console.log(`plussed = ${plussed}`)

