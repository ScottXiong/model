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
        categery:['Angular','Vue','Reacts','Jquery','Bootstrap','Cplus','Node','Databse','Java','Php','Tools','Plugins','English']
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
                          this.state.categery.map((name,index)=><Link key={index} to={`/${name}`} style={{marginLeft:'30px'}}>{name}</Link>)
                       }
             </div>
             <div className="row">
                   <div className='left col-md-2 col-xs-6'>
                    
                       {
                          this.state.categery.map((name,index)=><Link key={index} to={`/${name}`} style={{display:'block',fontSize:'20px',padding:'3px'
                            ,marginLeft:'30px'}}>{name}</Link>)
                       }
                    
                     <Link to={`/g/id`}>
                       带参数的跳转
                     </Link>
                      <Link to={`/`}>
                       不带参数的跳转a
                     </Link>
                   </div>
                   <div className='right col-md-9 col-xs-6'>
                     <A>
                       {
                          this.state.categery.map((name,index)=><Route key={index} path={`/${name}`} component={name}/>)
                       }
                    
                      <Route exact={true} path='/' render={()=>(
                        <div>
                         <ul>
                           <li>apple</li>
                           <li>pera</li>
                           <Angular/>
                         </ul>
                        </div>
                        )} />
                      <Route path='/g/:id' component={D}/>
                    </A>      
                   </div>
             </div>
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
