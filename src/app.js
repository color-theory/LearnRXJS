import * as React from 'react'
import { AsyncExperiments, ObservableMouse } from './main'

export class App extends React.Component{
    render(){
        return (
            <React.Fragment>
                <AsyncExperiments />
                <ObservableMouse />
            </React.Fragment>
        )
    }
}
