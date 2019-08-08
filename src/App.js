import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import store from './store';
import Header from './Noteful/Header/Header';
import SideBar from './Noteful/SideBar/SideBar';
import MainSection from './Noteful/MainSection/MainSection';
import AddFolder from './Noteful/AddFolder/AddFolder';
import AddNote from './Noteful/AddNote/AddNote';
import Note from './Noteful/Note/Note';
import NoteSideBar from './Noteful/NoteSideBar/NoteSideBar';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: store
    }
  }

  // renders Main Side Bar for any of the below mentioned routes
  renderSideBarRoutes = (folders) => {
    const paths = [
      '/',
      '/folder/:id',
    ]
    const routes = paths.map((path, i) => {
      return (
        <Route 
          key={i}
          exact
          path={path}
          render={(rprops) => <SideBar 
                                rprops={rprops}
                                folders={folders}
                              />}
        />
      )
    });

    return routes;
  }


  // renders the Side Bar with the Go Back Button 
  renderGoBackSideBarRoutes = (folders, notes) => {
    const paths = [
      '/note/:noteId',
      '/add-folder',
      '/add-note'
    ]

    const routes = paths.map((path, i) => {
      return (
        <Route
          key={i}
          exact
          path={path}
          render={
            (rprops) => 
              <NoteSideBar
                rprops={rprops}
                folders={folders}
                notes={notes}
              />
          }
        />
      );
    });

    return routes;
  }

  // Renders the Sections that displays Notes
  renderMainSection = (notes) => {

    const paths = [
      '/',
      '/folder/:id'
    ]

    const routes = paths.map((path, i) => {
      return (
        <Route
          key={i}
          exact
          path={path}
          render={
            (rprops) => 
              <MainSection
                rprops={rprops}
                notes={notes}
              />
          }
        />
      );
    });
    return routes;
  }

  // Main Render Method
  render(){

    const {folders, notes} = this.state.data;

    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className='flex-box-div'>

            {this.renderSideBarRoutes(folders)}
            {this.renderGoBackSideBarRoutes(folders, notes)}
            {this.renderMainSection(notes)}
            
            <Route 
              exact
              path='/note/:noteId'
              render={(rprops) => <Note 
                                    rprops={rprops}
                                    notes={notes}
                                  />}
            />

            <Route
              exact
              path='/add-folder'
              render={() => <AddFolder />}
            />

            <Route 
              exact
              path='/add-note'
              render={() => <AddNote />}
            />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}
