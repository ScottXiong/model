import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,HashRouter,Link, Route} from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import './index.scss';


import Angular from './pages/angular/index.jsx'
import Vue from './pages/vue/index.jsx'
import Reacts from './pages/reacts/index.jsx'
import Jquery from './pages/jquery/index.jsx'
import Bootstrap from './pages/bootstrap/index.jsx'
import Cplusplus from './pages/cplusplus/index.jsx'
import Node from './pages/node/index.jsx'
import Database from './pages/database/index.jsx'
import Java from './pages/java/index.jsx'
import Php from './pages/php/index.jsx'
import Tools from './pages/tools/index.jsx'
import Plugins from './pages/plugins/index.jsx'
import English from './pages/english/index.jsx'
import Html from './pages/html/index.jsx'
import Js from './pages/Js/index.jsx'
import Css from './pages/css/index.jsx'


//life circle

class A extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <h1>{this.props.children}</h1>
  }
}

function C(){
  return (
     <div>
       <h3>I am Component C</h3>
     </div>
    )
}

const D=()=>{
  return <div>
    <h3>hello world</h3>
    <button className="btn btn-success">click me</button>
  </div>
}

class App extends React.Component {
   constructor(props){
       super(props)
       this.state={
        category:['Angular','Vue','React','Html','Js','Css','Jquery','Bootstrap','C++','Node','Databse','Java','Php','Tools','Plugins','English']
       }
   }
   render(){
    return(
      
       <HashRouter>
         <div>
           <div className='head'>
               <h3 >Welcome to Scott's Blog</h3>
           </div>
           <div className="container">
             <div id="list">
                
                       {
                          this.state.category.map((name,index)=><Link key={index} to={`/${name}`} style={{marginLeft:'30px'}}>{name}</Link>)
                       }
             </div>
             <A>
               <Route path='/angular' component={Angular}/>
               <Route path='/vue' component={Vue}/>
               <Route path='/React' component={Reacts}/>
               <Route path='/html' component={Html}/>
               <Route path='/css' component={Css}/>
               <Route path='/js' component={Js}/>
               <Route path='/jquery' component={Jquery}/>
               <Route path='/bootstrap' component={Bootstrap}/>
               <Route path='/c++' component={Cplusplus}/>
               <Route path='/node' component={Node}/>
               <Route path='/databse' component={Database}/>
               <Route path='/java' component={Java}/>
               <Route path='/php' component={Php}/>
               <Route path='/tools' component={Tools}/>
               <Route path='/plugins' component={Plugins}/>
               <Route path='/english' component={English}/>
            </A>      
           </div>
         </div>
       </HashRouter>          
       
      )
   }
}
ReactDOM.render(
       <App/>,
    document.getElementById('app')
);
