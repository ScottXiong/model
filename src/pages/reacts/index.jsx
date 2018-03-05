import React from 'react'
import Hello from './hello.jsx'
import './index.css'
class Reacts extends React.Component{
	constructor(props){
		super(props)
		this.state={
			chapters:['hello world']
		}
	}
	render(){
		return(
            <div className="container">
              <div className='row'>
                   <div className='left col-md-2'>
                   	<i className="fab fa-apple">React</i>
                   </div>
                   <div className='right col-md-9'>
                   	<Hello/>
                   </div>
              </div>
            </div>
		)
	}
}
export default Reacts;