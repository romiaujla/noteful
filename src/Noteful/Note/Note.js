import React, {Component} from 'react';
import './Note.css';

export default class Note extends Component{
    
    static defaultProps = {
        rprops: {},
        notes: []
    }

    render(){

        const {rprops, notes} = this.props;
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