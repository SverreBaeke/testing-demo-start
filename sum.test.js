import {sum}  from "./sum.js";
import { sumArray } from "./sum-of-array.js";
describe('sum', () => {
    it('Should return the two numbers added to each other', () => {
        expect(sum(1,2)).toBe(3);
    })
})

describe('sumArray', () => {
    it('Should return the sum of all values in the array', () => {
        expect(sumArray([1,3,5])).toBe(9);
    })
})