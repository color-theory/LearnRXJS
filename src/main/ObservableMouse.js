import { fromEvent } from 'rxjs'
import { map, delay } from 'rxjs/operators';
import * as React from 'react'

export class ObservableMouse extends React.Component{
    constructor(){
        super()
        this.state = { 
            ball:{
                x: 0,
                y: 0
            }
        }
        let source = fromEvent(document, 'mousemove').pipe(
            map(e => {
                return {
                    x: e.clientX, 
                    y: e.clientY
                }
            }),
            delay(300)
        );
        
        let onNext = (value) => {
            this.setState({
                ball: {
                    x: value.x,
                    y: value.y
                }
            });
        }
        source.subscribe(onNext)
    }
    render(){
        return (
            <div id="circle" style={{backgroundColor: '#aaf', borderRadius: 10, width:20, height:20, top: this.state.ball.y, left: this.state.ball.x, position: 'absolute'}}></div>
        )        
    }
}
