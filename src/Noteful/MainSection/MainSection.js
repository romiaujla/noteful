import React, {Component} from 'react';
import './MainSection.css';
import {Link} from 'react-router-dom';

export default class MainSection extends Component {

    static defaultProps = {
        notes: [],
        rprops: {}
    }

    noteHTML = (note, link) => {
        return (
            <li 
                key={note.id}
            >
                <Link to={link + '/note/'  + note.id}>
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

        const {notes, rprops} = this.props;

        const notesHTML = notes.map((note) => {
            if(rprops.location.pathname !== '/'){
                return ((rprops.match.params.id === note.folderId) &&
                    this.noteHTML(note, rprops.location.pathname)
                );
            }else{
                const link = '/folder/' + note.folderId;
                return this.noteHTML(note, link);
            }
            
        });

        return (
            <section className='MainSection'>
                <ul>
                    {notesHTML}
                </ul>
                <button className='add-note-btn app-btn' type='button'>Add Note</button>
            </section>
        );
    }
}