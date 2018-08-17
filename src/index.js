import { from } from 'rxjs'

let numbers = [1,3,4,5,7];
let source = from(numbers);

class MyObserver {
    next(value){
        console.log(`value: ${value}`);
    }
    error (e){
        console.log(`error: ${e}`);
    }

    complete() {
        console.log('complete');
    }
}

source.subscribe(new MyObserver());