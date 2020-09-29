const ActionTypes = {
  // 전체 데이터
  POSTS_GET_REQUEST: "posts/POSTS_GET_REQUEST",
  POSTS_GET_SUCCESS: "posts/POSTS_GET_SUCCESS",
  POSTS_GET_FAILURE: "posts/POSTS_GET_FAILURE",

  // 각 id (= page) 별 데이터
  POST_GET_REQUEST: "post/POST_GET_REQUEST",
  POST_GET_SUCCESS: "post/POST_GET_SUCCESS",
  POST_GET_FAILURE: "post/POST_GET_FAILURE",
};

export default ActionTypes;
