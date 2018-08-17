import { fromEvent } from 'rxjs'
import { map } from 'rxjs/operators';
import * as React from 'react'


let source = fromEvent(document, 'mousemove').pipe(
    map(e => {
        return {
            x: e.clientX, 
            y: e.clientY
        }
    })
);

source.subscribe(
    (value) => {
        console.log(value.x, value.y );
    }
)

export const ObservableMouse = () => {
    return (
        <div>
            Hello Again Mouse
        </div>
    )        
}
