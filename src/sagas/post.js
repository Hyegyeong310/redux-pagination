import Axios from "axios";
import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import ActionTypes from "../actions";

// POSTS GET Request 관련
function postsAPI() {
  // 사용 url로 수정
  return Axios.get("https://koreanjson.com/posts");
}

function* posts(action) {
  try {
    const data = yield call(postsAPI, action.data);
    yield put({
      type: ActionTypes.POSTS_GET_SUCCESS,
      data,
    });
  } catch (e) {
    yield put({
      type: ActionTypes.POSTS_GET_FAILURE,
      data: e,
    });
  }
}

function* watchPosts() {
  yield takeLatest(ActionTypes.POSTS_GET_REQUEST, posts);
}

// POST GET Request 관련
function postAPI(activeId) {
  // 사용 url로 수정
  return Axios.get(`https://koreanjson.com/posts/${activeId}`);
}

function* post(action) {
  try {
    const data = yield call(postAPI, action.data);
    yield put({
      type: ActionTypes.POST_GET_SUCCESS,
      data,
    });
  } catch (e) {
    yield put({
      type: ActionTypes.POST_GET_FAILURE,
      data: e,
    });
  }
}

function* watchPost() {
  yield takeLatest(ActionTypes.POST_GET_REQUEST, post);
}

export default function* userSaga() {
  yield all([
    fork(watchPosts),
    fork(watchPost),
    // 배열 안에 추가하면 됨.
  ]);
}
