import { Observable } from 'rxjs'
import * as React from 'react'

export class AsyncExperiments extends React.Component{
    constructor(props){
        super(props)
        let produceValue;
        let numbers = [1,2,3,4,5,6,7];
        this.state = { myValue: '' };
        let source = Observable.create((observer) => {
           let index = 0;
           produceValue = () => {
               observer.next(numbers[index++])
               if (index < numbers.length){
                    setTimeout(produceValue, 1000);
               }else{
                   observer.complete();
               }
           }
           produceValue();
        });

        let subscribed = () => source.subscribe(
            (value) => this.setState({myValue: value}), // observer.next
            (error) => console.log(error),              // observer.error
            () => this.setState({myValue: 'Complete!'}) // observer.complete
        );

        setTimeout(subscribed, 1000);
    }

    render(){
        return <div>{this.state.myValue}</div>
    }
}