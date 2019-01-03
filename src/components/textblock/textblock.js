import React from 'react';
import ReactDom from 'react-dom'


export class TextBlock extends React.Component{
    constructor()
    {
        super()
        this.state=({count:1})
    }
    onComponentDidMount(){
        console.log("the world ismine")
        
    }
   increment(){
        this.setstate({count:++this.state.count})
    }
    getState(){
        return this.state.count
    }
    render(){
        return(
            <div>
            <div onClick={(e)=>{this.increment()}} style={{border:"solid red 2px"}}>{this.getState()}</div>
            </div>
        )
    }
} 

