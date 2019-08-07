import React, {Component} from 'react';
import './AddFolder.css';

export default class AddFolder extends Component {

    render(){
        return(
            <div className='AddFolder'>
                <form>
                    <label htmlFor='folder-name'>
                        <p>Name: </p>
                        <input 
                            type='text' 
                            required
                            placeholder='Enter Name of the Folder'
                            id='folder-name'
                            name='folder-name'
                            className='folder-name'
                        />
                    </label>
                    <button 
                        className='add-btn app-btn' 
                        type='button'
                    >Add Folder</button>
                </form>
            </div>
        );  
    }

}