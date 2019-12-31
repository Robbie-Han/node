import {foo} from './a.mjs'; // (iii)
export function bar() {
    if (Math.random()> 0.1) {
        foo(); // (iv)
    }
}