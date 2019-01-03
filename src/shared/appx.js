import React from "react"
import ReactDOM from "react-dom"
import {Switch,Route} from "react-router-dom"
import {routes} from './routes.js'

export const AppX=(props)=>{
    return (
        <Switch>
            {routes.map((route,i)=><Route key={i} {...route}/>)}
            </Switch>
    )
}
