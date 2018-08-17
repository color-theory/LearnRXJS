import { Observable } from 'rxjs'

let numbers = [1,3,4,5,7];

let source = Observable.create((observer) => {
    for(let n of numbers){
        observer.next(n);
    }
    observer.complete();
});

source.subscribe(
    (value)=> {
        console.log(value);
    },
    (error)=>{
        console.log(error);
    },
    ()=>{
        console.log('complete');
    }
);