import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router';
//react-router를 설치 해줘야함. 책에는 react-router-dom 만 설치해도 된다고 다나와있
import User from './containers/User';
import Nav from './containers/Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typoraphy from '@material-ui/core/Typography';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CssBaseline/>
                <AppBar>
                    <Toolbar>
                        <Typoraphy type="title" color="inherit">
                            Github API 클라이언트
                        </Typoraphy>
                    </Toolbar>
                </AppBar>
                <Nav />
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/user/apple" />)} />
                    <Route path="/user/:id" render={({ match }) => <User user={match.params.id}/>} />
                </Switch>
            </div>
        );
    }
}

export default App;
