import React,{Component} from 'react'
import { render } from 'react-dom'

import {Component1,Component2} from './component'


require("./css/main.css")


setTimeout( () => {
	alert("I am something code about business")
},5000)

class Box extends Component{
		
		render(){
			return (
				<div>
					<Component1 />
					<Component2 />
				</div>
				
			)
		}
}


render(
	<Box />,
	document.getElementById("main")
)