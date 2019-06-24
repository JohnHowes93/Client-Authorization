import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    renderLinks(){
        if (this.props.authenticated){
            return (
            <div>
                <div>  <Link to="/signout">Sign Out</Link></div>
                <div>  <Link to="/feature">Feature</Link></div>
            </div>
            )
        }
        else {
            return (
                <div>
                    <div>  <Link to="/signup">Sign Up</Link></div>
                    <div>  <Link to="/signin">Sign In</Link></div>
                </div>
            )
        }
    }
    render(){
        return (<div>
            <div> <Link to="/">Redux Auth</Link> </div>
            {this.renderLinks()}
        </div>
        )
    }
}


export default Header