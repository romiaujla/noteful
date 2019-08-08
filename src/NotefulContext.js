import React from 'react';
import store from './store';

const NotefulContext = React.createContext({
    data: store
});

export default NotefulContext;
