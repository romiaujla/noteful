import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component {

    render(){
        return (
            <Link to='/'>
                <div className='Header'>
                    <h1>Noteful</h1>
                </div>
            </Link>
        );
    }

}