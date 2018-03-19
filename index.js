import "babel-polyfill"
import React,{Component} from 'react'
import { render } from 'react-dom'

require("./css/main.css")

class Box extends React.Component{
	render(){
		return (
			<h1>just pretend i am a box</h1>
		)
	}
}
render(
	<Box />,
	document.getElementById("main")
)