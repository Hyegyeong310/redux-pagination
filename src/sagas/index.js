import { all, call } from "redux-saga/effects";
import post from "./post";

export default function* rootSaga() {
  yield all([
    call(post),
    // 배열 안에 추가하면 됨.
  ]);
}
