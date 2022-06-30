import React from 'react'
import {render} from "react-dom"
import '../css/style.css'
import fre from './component/fre'
function APP(){
    return fre
}
function init(){
    const containerE1=document.querySelector('#container')
    render(<APP />,containerE1)
}
init()