import React, { Component } from 'react';
import '../Style/App.css';
import {Switch, Route} from "react-router-dom";
import StartPage from "./StartPage/StartPage";
import LearnPage from "./LearnPage/LearnPage";
import Header from "./Header";
import DocPage from "./DocPage/DocPage";
import NavBar from "./Navbar";
import Test from "./Test/Test";


class App extends Component {
    state = {
        id :[1,2,3,4,5,6,7,8,9,10],
        name : [  'Bắt đầu với JSX'
                ,'Class và Component'
                ,'Props và State'
                ,'Vòng đời trong ReactJs'
                ,'Đón bắt sự kiện'
                ,'Xử lý mảng'
                ,'React route'
                ,'Modal popup'
                ,'Hoạt cảnh bằng thư viện'
                ,'Hoạt động service'
        ],
        fileName: 'code',
        docFile: 'doc',
        editFile: 'copyCode'
    }

  render() {

    return (
        <div id={'app'}>
            <Switch>
                <Route exact path={"/"} component={StartPage}/>
                <Route exact path={'/doc'} render = {(props)=><DocPage data={this.state}/>}/>
                <Route exact path={'/doc/learn/'} render = {(props)=><LearnPage data={this.state}/>}/>
                <Route exact path={"/test"} component={Test}/>
            </Switch>
        </div>
          );
  }
}

export default App;
