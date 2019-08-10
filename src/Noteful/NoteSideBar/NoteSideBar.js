import React, {Component} from 'react';
import './NoteSideBar.css';
import NotefulContext from '../../NotefulContext';

export default class NoteSideBar extends Component {
    
    static defaultProps = {
        rprops: {}
    }

    static contextType = NotefulContext;

    render(){    
        const {history} = this.props.rprops;
        const {folders, notes} = this.context.data;
        let folderName = '';
        const noteId = this.props.rprops.match.params.noteId;
        
        // Set the name of the folder for the sidebar only when
        // the url has the noteId, which indicates that a note is open
        // other case is to use the same side bar when add-folder component is used. 
        if(noteId !== undefined){
            const note = notes.find((note) => note.id === noteId);
            folderName = folders.find((folder) => folder.id === note.folderId).name;
        }
        
        return(
            <div className='NoteSideBar'>
                <button 
                    className='go-back-btn app-btn' 
                    onClick={() => {history.goBack()}}
                >
                    Go Back
                </button>

                {folderName && 
                    (
                        <div className='folder-name'>
                            <h4 className=''>Current Folder</h4>
                            <h5>{folderName}</h5>
                        </div>
                    )
                }

            </div>
        );
    }
}