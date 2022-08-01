import { all, fork } from 'redux-saga/effects';
import userSaga from './user';
import postSaga from './post';


export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(userSaga),
  ]);
}
// generator함수: 실행중간에 멈출 수 있는 함수
// yield: generator.next() 시 멈추는 지점 // yield 4 시 {value:4 , done: false} done은 마지막에 true가됨
// fork: 비동기함수 호출
// call: 동기함수 호출
// put: dispatch
// delay: 지정한 수만큼 멈춤
// take('LOG_IN',logIn): LOG_IN action이 실행될때까지 기달리다가 실행되면 logIn함수를 실행함 (1회용) -> 무한으로 사용하기위해 while 사용
// takeEvery: take + while 조합대신 쓰는 effects
// takeLatest: 클릭 2번했을때 마지막만 응답이 옴 (takeLeading:첫번째꺼만 응답이 옴)
// -> 치명적 단점: 요청이 아닌 응답을 취소하는것 (서버에는 데이터가 2번 저장됨), 새로고침하면 2번 뜸
// throttle: throttle('LOG_IN',logIn,2000): 2초동안 LOG_IN는 1번만 실행됨

// effects리스트 : https://redux-saga.js.org/docs/api/
// thunk 비동기액션 크리에이터를 직접실행했지만 , saga는 비동기액션 크리에이터가 이벤트리스너 역활을 함
