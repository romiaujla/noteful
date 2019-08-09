import React, {Component} from 'react';
import './MainSection.css';
import {Link} from 'react-router-dom';
import NotefulContext from '../../NotefulContext';

export default class MainSection extends Component {

    static defaultProps = {
        notes: [],
        rprops: {}
    }

    static contextType = NotefulContext;

    noteHTML = (note) => {
        return (
            <li 
                key={note.id}
            >
                <Link to={'/note/'  + note.id}>
                    <h3>{note.name}</h3>
                </Link>
                <div className='note-info'>
                    <p>
                        Date modified on {note.modified}
                    </p>
                    <button className='delete-btn app-btn' type='button'>Delete</button>
                </div>
            </li>
        );
    }

    render(){

        const {rprops} = this.props;
        const {notes} = this.context.data;

        const notesHTML = notes.map((note) => {
            if(rprops.location.pathname !== '/'){
                return ((rprops.match.params.id === note.folderId) &&
                    this.noteHTML(note)
                );
            }else{
                return this.noteHTML(note);
            }
            
        });

        return (
            <section className='MainSection'>
                <ul>
                    {notesHTML}
                </ul>
                <Link to='/add-note'>
                    <button className='add-note-btn app-btn' type='button'>Add Note</button>
                </Link>
            </section>
        );
    }
}