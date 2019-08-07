import React, {Component} from 'react';
import './NoteSideBar.css';

export default class NoteSideBar extends Component {
    
    static defaultProps = {
        folders: [],
        rprops: {}
    }

    render(){    

        const folderId = this.props.rprops.match.params.id;
        const {history} = this.props.rprops;
        const folderName = this.props.folders.map((folder) => {
            let name = '';
            if(folder.id === folderId){
                name = folder.name;
            }
            return name;
        });

        return(
            <div className='NoteSideBar'>
                <button className='go-back-btn app-btn' onClick={() => {history.goBack()}}>Go Back</button>
                {this.props.rprops.location.pathname !== '/add-folder' && 
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