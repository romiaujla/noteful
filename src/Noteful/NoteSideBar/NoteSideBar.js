import React, {Component} from 'react';
import './NoteSideBar.css';

export default class NoteSideBar extends Component {
    
    static defaultProps = {
        folders: [],
        notes: [],
        rprops: {}
    }

    render(){    
        const {history} = this.props.rprops;
        let folderName = '';
        const noteId = this.props.rprops.match.params.noteId;
        
        if(noteId !== undefined){
            const note = this.props.notes.filter((note) => note.id === noteId)[0];
            folderName = this.props.folders.filter((folder) => folder.id === note.folderId)[0].name;
        }
        
        return(
            <div className='NoteSideBar'>
                <button className='go-back-btn app-btn' onClick={() => {history.goBack()}}>Go Back</button>
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