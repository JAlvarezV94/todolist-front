import React, {Component} from 'react';
import './navbar.css';

class NavBar extends Component{
    render(){
        return(
            <nav>
                <button onClick={this.props.onPlusClick} className="nav-button">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </button>
            </nav>
        );
    }
}

export default NavBar;