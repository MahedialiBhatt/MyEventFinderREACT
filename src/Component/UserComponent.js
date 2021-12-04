import React from 'react';
import '../../src/login.css'
import { Redirect } from 'react-router-dom'
import {store, login, logout} from './../sessionStore'


class UserComponent extends React.Component{
     
    state = {msg: '',
        status: '',
        users: [
            {'uname': 'admin', 'pwd': 'admin'},
            {'uname': 'user', 'pwd': 'password'},
            {'uname': 'test', 'pwd': 'user'}
        ]
    } 

    // state={msg:'',status:false}
    validateUser(){
        var uname = this.refs.uname.value;
        var pwd = this.refs.pwd.value;

        // if ( uname==="admin" && pwd==="1234"){
        //     this.setState({msg:'Credentials found correct...'});
        //     this.setState({status:true});
        // }    
        // else
        //     this.setState({msg:'Invalid input credentials'});
        if (this.state.users.find( x => x.uname === uname && x.pwd === pwd)) {
            console.log("welcome....................")
            store.dispatch(login(uname))
            this.setState({msg: 'Credentials Validated.....', status:true})
        }
        else {
            store.dispatch(logout())
            this.setState({msg: 'Invalid Credentials.....', status:false})
        }
    }
    render(){
        if ( this.state.status)
            return <Redirect to ="/dashboard" />
        return(
            <div className="container">
                <div id="formContent">
  
                    <div className="container fa-stack-2x">
                        <img src="https://miro.medium.com/max/600/1*nWFPcxzUnuGEQxICHfGhSQ.png" id="icon" alt="User Icon" />
                    </div>

    
                   <div>
                        <input type="text" id="login" className="fadeIn second" name="login" ref="uname" placeholder="login"/>
                        <input type="password" id="password" className="fadeIn third form-control psswd" name="password" ref="pwd" placeholder="password"/>
                        <input type="submit" className="fadeIn fourth" value="Log In" onClick={()=>this.validateUser()}/>
                    </div>

                    <div className="alert alert-danger">
                         <strong>{this.state.msg}</strong>
                    </div>

                </div>
            </div>
        )
    }
}

export default UserComponent