import { fromEvent } from 'rxjs'
import { map, filter } from 'rxjs/operators';
import * as React from 'react'


let source = fromEvent(document, 'mousemove');

source.subscribe(
    (value) => {
        console.log(value);
    }
)

export const ObservableMouse = () => {
    return (
        <div>
            Hello Again Mouse
        </div>
    )        
}
