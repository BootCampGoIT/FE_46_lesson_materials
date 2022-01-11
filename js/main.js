import { calculate, print } from "./helpers.js";
import { getDev } from "./operations.js";

const result = calculate(10, 20, getDev, print);
console.log(result); 
