import React, { Component } from 'react';
import '../Style/App.css';
import {Switch, Route} from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import LearnPage from "./LearnPage/LearnPage";
import Header from "./Header";
import DocPage from "./DocPage/DocPage";
import NavBar from "./Navbar";
import listReactFiles from 'list-react-files'


class App extends Component {

    state = {
        id : '1',
        fileName: 'code',
        docFile: 'doc',
        editFile: 'copyCode'
    }

  render() {

    return (
        <div id={'app'}>
            <NavBar/>
            {/* <Header/> */}
            <Switch>
                <Route exact path={"/"} component={StartPage}/>
                <Route exact path={'/doc'} component={DocPage}/>
                <Route exact path={'/doc/learn/'} component={LearnPage}/>
            </Switch>
            <footer>
                Copyright 2018, UET CodeCamp
            </footer>
        </div>
          );
  }
}

export default App;
