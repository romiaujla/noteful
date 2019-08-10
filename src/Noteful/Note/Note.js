import React, {Component} from 'react';
import './Note.css';
import NotefulContext from '../../NotefulContext';

export default class Note extends Component{
    
    static defaultProps = {
        rprops: {},
    }

    static contextType = NotefulContext;

    render(){

        const {rprops} = this.props;
        const {notes} = this.context.data;
        const noteId = rprops.match.params.noteId; 

        let note = notes.find(note => note.id === noteId);

        return(
            <div className='Note'>
                <div className='note-description'>
                    <h3>{note.name}</h3>
                    <div className='note-info'>
                        <p>
                            Date modified on {note.modified}
                        </p>
                        <button className='delete-btn app-btn' type='button'>Delete</button>
                    </div>
                </div>
                <div className='note-content'>
                    {note.content}
                </div>
            </div>
        );
    }
}