import React from 'react'
import {BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom'
import UserComponent from './UserComponent'
import EventManager from './EventManager'


class EventRoute extends React.Component{
    render(){
        return (
            <div>
            <h1>My Event Finder</h1>
           
            <Router>
            
            {/* <Link to="/login">Login</Link>| */}
            {/* <Link to="/people">People</Link>| */}
           
            <Switch>
                    <Route exact path="/">
                        <UserComponent/>
                    </Route>
                    <Route exact path="/dashboard">
                      <EventManager/>
                    </Route>
                    <Route exact path="/logout">
                        <UserComponent/>
                    </Route>
                    
 
                </Switch>

            </Router>
        </div>
        )
    }
}
export default EventRoute;