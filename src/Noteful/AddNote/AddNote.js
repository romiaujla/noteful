import React, {Component} from 'react';
import './AddNote.css';
import NotefulContext from '../../NotefulContext';

export default class AddNote extends Component {

    static contextType = NotefulContext;

    render(){

        const {folders} = this.context.data;
        const selectFolderOptions = folders.map((folder) => {
            return (
                <option 
                    key={folder.id}
                    value={folder.id}
                >{folder.name}</option>
            );
        })
        return(
            <div className='AddNote'>
                <form>
                    <label htmlFor='note-name'>
                        <p>Name:</p>
                        <input 
                            type='text'
                            placeholder='Enter Name for the Note'
                            required
                            name='note-name'
                            id='note-name'
                            className='note-name'
                        />
                    </label>
                    <label htmlFor='note-message'>
                        <p>Note:</p>
                        <textarea
                            type='text'
                            placeholder='Enter Note Here...'
                            required
                            name='note-message'
                            id='note-message'
                            className='note-message'
                        />
                    </label>
                    <label htmlFor='select-folder'>
                        <p>Select Folder</p>
                        <select>
                            <option value='none'>Select One...</option>
                            {selectFolderOptions}
                        </select>
                    </label>
                    <button 
                        type='submit'
                        className='add-note-btn app-btn'
                    >Add Note</button>
                </form>
            </div>
        );  
    }

}