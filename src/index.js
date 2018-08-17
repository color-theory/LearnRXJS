import { from } from 'rxjs'

let numbers = [1,3,4,5,7];
let source = from(numbers);

source.subscribe(
    (value)=> {
        console.log(value);
    }
);