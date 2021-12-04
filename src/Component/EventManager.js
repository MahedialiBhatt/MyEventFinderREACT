import React from 'react';
import reactDom from 'react-dom';
import { Redirect } from 'react-router-dom'
import {store, logout} from './../sessionStore'

class EventManager extends React.Component{
    state = {events:[]}
    logoutUser() {
        store.dispatch(logout())
        return <Redirect to ="/logout" />
    }
    componentDidMount(){
        var url = "http://localhost:3000/events";

        fetch(url)
        .then(response=>response.json())
        .then(response=>this.setState({events:response}))      
    }

    componentDidUpdate(){
        var url = "http://localhost:3000/events";
        fetch(url)
            .then(response=>response.json())
            .then(response => this.setState({events:response}));            
    }   

    AddEvents(){
        let event = {
            "id": Number(this.refs.id.value),
            "eventName":this.refs.eventName.value,
            "location":this.refs.location.value,
            "guest":this.refs.guest.value,
            "date":this.refs.date.value
        };
        let url = "http://localhost:3000/events";
        fetch(url,{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(event)
        })
        .then(response=>response.json())
        .then(() => this.setState({msg:'Row added....'})); 

    }

    EditEvents(){
        let event = {
            "id": Number(this.refs.id.value),
            "eventName":this.refs.eventName.value,
            "location":this.refs.location.value,
            "guest":this.refs.guest.value,
            "date":this.refs.date.value
        };
        let url = `http://localhost:3000/events/${event.id}`;
        fetch(url,{
            method:'PUT',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(event)
        })
        .then(response=>response.json())
        .then(() => this.setState({msg:'Row updated....'}));        
    }

    DeletEvents(){        
        let id =Number(this.refs.id.value);
    let url = `http://localhost:3000/events/${id}`;
    fetch(url,{
        method:'DELETE'
    })
    .then(response=>response.json())
    .then(() => this.setState({msg:'Row deleted....'}));        
    }

    render(){
        var event = this.state.events;
        return(
            
            <div className="container">
                <button onClick = {() => this.logoutUser()}>Logout</button> <br/>
            <div className="wrapper fadeInDown">

            <div><div className="divEvent">

            
                        <input type="number" id="login" className="form-control psswd" name="login" ref="id" placeholder="Id"/>
                        <input type="text" id="eventName" className="form-control psswd" name="eventName" ref="eventName" placeholder="eventName"/>
                        <input type="text" id="location" className="form-control psswd" name="location" ref="location" placeholder="location"/>
                        <input type="text" id="guest" className="form-control psswd" name="guest" ref="guest" placeholder="guest name"/>
                        <input type="date" id="date" className="form-control psswd" name="date" ref="date" placeholder="DATE"/>
                        </div>
                        <div>
                        <input type="submit"  value="Add Events" onClick={()=>this.AddEvents()}/>
                        <input type="submit"  value="Edit Events" onClick={()=>this.EditEvents()}/>
                        <input type="submit"  value="Delete Events" onClick={()=>this.DeletEvents()}/>
                        </div>
                        
                        </div>
                
           
            </div>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>ID</th> <th>Name of the event</th> <th>location</th> <th>guest</th> <th>date</th>
                        </tr>
                    </thead>

                    <tbody>
                    {event.map(p => <tr><td>{p.id}</td>
                                <td>{p.eventName}</td>
                                <td>{p.location}</td>
                                <td>{p.guest}</td>
                                <td>{p.date}</td>
                </tr>
                )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EventManager;