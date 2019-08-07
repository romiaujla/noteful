import React, {Component} from 'react';
import './MainSection.css';

export default class MainSection extends Component {

    static defaultProps = {
        notes: [],
        folders: [],
        rprops: {}
    }

    render(){

        const {notes, folders, rprops} = this.props;

        const notesHTML = notes.map((note) => {
            // console.log(rprops.match.params.id);
            // return 'this.props.rprops.params.id';
            return ( (rprops.match.params.id === note.folderId) &&
                <li 
                    key={note.id}
                >
                    <h3>{note.name}</h3>
                    <div className='note-info'>
                        <p>
                            Date modified on {note.modified}
                        </p>
                        <button className='delete-btn app-btn' type='button'>Delete</button>
                    </div>
                </li>
            );
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