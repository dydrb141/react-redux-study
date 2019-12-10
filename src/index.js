import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router' //react-router-redux가 deprecate됨 그래서 connected-react-router를 사용
import createBrowserHistory from 'history/createBrowserHistory';
//import history from 'history'
//import history from 'history/createBrowserHistory';
import App from './App';
import createStore from './createStore';



const history = createBrowserHistory();
const store = createStore(history);

/*
//crateStore 함수를 사용해 리듀서 기반으로 스토어를 만듬
const store = createStore (
    //서로 다른 리듀싱 합수들을 값으로 가지는 객체를 받아서 createStore에 넘길 수 있는 하나의 리듀싱 함수로 바꿔줌
    combineReducers(reducers),
    applyMiddleware(logger)
    // 리덕스 미들웨어에 redux-logger 설정
    //리덕스 미들웨어는 리덕스의 기능을 확장할 때 사용
    // 액션이 우리가 원하는 형태로 상태를 변경하는지 알 때 사용
);
*/

ReactDOM.render(
    //스토어를 app 컴포넌트에 연결
    <Provider store={store}>

        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);



