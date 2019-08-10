import React, {Component} from 'react';
import './SideBar.css';
import {Link} from 'react-router-dom';
import NotefulContext from '../../NotefulContext';

export default class SideBar extends Component {
    
    static defaultProps = {
        rprops: {}
    }

    static contextType = NotefulContext;

    render(){

        const {rprops} = this.props;
        const {folders} = this.context.data;
        const selection = rprops.location.pathname;

        const foldersListHtml = folders.map((folder) => {
            const linkPath = `/folder/${folder.id}`
            return (
                <Link 
                    to={linkPath}
                    key={folder.id} 
                >
                    <li className={(linkPath === selection)? 'selected': ''}>
                        {folder.name}
                    </li>
                </Link>
            );
        });

        return (
            <aside className='SideBar'>
                <ul>
                    {foldersListHtml}
                </ul>
                <Link to='/add-folder'>
                    <button className='add-btn app-btn' type='button'>Add folder</button>
                </Link>
            </aside>
        );
    }
}