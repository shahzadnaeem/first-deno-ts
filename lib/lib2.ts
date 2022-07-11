import { one, two, add } from './lib.ts';

export const ONE = ():number => one();
export const TWO = ():number => two();

export function plusser(...nums:number[]) {
    return nums.reduce((prev:number,curr:number)=>add(prev,curr), 0)
}
