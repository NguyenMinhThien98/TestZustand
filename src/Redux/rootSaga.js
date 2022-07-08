import {call , takeEvery, takeLatest} from 'redux-saga/effects'

function* rootSaga(){
    yield call(test)
}

function test(){
    const result = 10 / 3;
    console.log('Hello Saga', result);
}

export default rootSaga;