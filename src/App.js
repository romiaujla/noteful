import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import Header from './Noteful/Header/Header';
import SideBar from './Noteful/SideBar/SideBar';
import MainSection from './Noteful/MainSection/MainSection';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: store,
      currentFolder: 2
    }
  }

  render(){

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className='flex-box-div'>
            <Route 
              path='/'
              render={(rprops) => <SideBar 
                                rprops={rprops}
                                folders={this.state.data.folders} 
                                currentFolder={this.state.currentFolder} />} 
            />
            <Route 
              exact
              path='/folder/:id'
              render={(rprops) => <MainSection 
                        rprops={rprops}
                        notes={this.state.data.notes}
                        folders={this.state.data.folders}
                      />}
            />
            <Route
              exact
              path='/add-folder/'
              render={() => <div className='Add-Folder'>to Add Folder</div>}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
