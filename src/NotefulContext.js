import React from 'react';
import store from './store';

let gfolders = [], gnotes = [];

const setFolders = (folders) => {
    gfolders = [...folders];
    console.log(gfolders);
}

const setNotes = (notes) => {
    gnotes = [...notes];
    console.log(gnotes);
}

const getFoldersData = () => {

    const fetchFolders = 'http://localhost:9090/folders';
    const fetchNotes = 'http://localhost:9090/notes'
    
    let foldersData = [];

    Promise.all([
        fetch(fetchFolders),
        fetch(fetchNotes)
    ])
    .then(([foldersRes, notesRes]) => {
        if(!foldersRes.ok){
            throw new Error('Folders where not found in the API');
        }
        if(!notesRes.ok){
            throw new Error('Notes where not found in the API');
        }

        return (Promise.all([foldersRes.json(), notesRes.json()]));

    })
    .then(([folders, notes]) => {
        const NotefulContext = React.createContext({
            data: store,
            folders : gfolders,
            notes: gnotes
        });
    })
    .catch((e) => {
        console.log(e.message);
    })
};



export default NotefulContext;
