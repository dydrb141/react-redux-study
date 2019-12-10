import fetchJsonp from 'fetch-jsonp';
import { replace } from 'react-router-redux';

const API_URL = 'http://api.github.com/users';

//요청 시작
const startRequest = category => ({
    type: 'START_REQUEST',
    payload: { category },
});

//응답 받음
const receiveData = (category, error, response) => ({
    type: 'RECEIVE_DATA',
    payload: { category, error, response },
});

//요청완료
const finishRequest = category => ({
    type: 'FINISH_REQUEST',
    payload: { category },
});

//사용자 추출
export const fetchUser = user => {
    //redux-thunk를 사용한 비동기 처리
    return async (dispatch, getState) => {
        const categories = getState().users.categories; //카테고리 ID에 대응하는 state.users.categories의 요소 추출
        const category = categories.find(category => (category.id === user));

        console.log("categories" + categories);

        if (typeof category === 'undefined') {
            dispatch(replace('/'));
            return;
        }

        dispatch(startRequest(category));

        try {
            const response = await fetchJsonp(`${API_URL}/${user}`);
            const data = await response.json();
            dispatch(receiveData(category, null, data));
        } catch (e) {
            dispatch(receiveData(category, e));
        }
        dispatch(finishRequest(category));
    };
};





