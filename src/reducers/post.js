import producer from "immer";
import ActionTypes from "../actions";

export const initialState = {
  isShow: false,
  isLoading: false,
  activeId: 1, // page 역할
  total: 0, // 전체 페이지
  posts: [],
  post: {},
  fail: {
    message: "",
  },
};

const reducer = (state = initialState, action) => {
  const { type, data } = action;
  return producer(state, (draft) => {
    switch (type) {
      case ActionTypes.POSTS_GET_REQUEST: {
        draft.total = 0;
        draft.posts = [];
        draft.fail = initialState.fail;
        break;
      }
      case ActionTypes.POSTS_GET_SUCCESS: {
        draft.total = data.data.length;
        draft.posts = data.data;
        break;
      }
      case ActionTypes.POSTS_GET_FAILURE: {
        draft.total = 0;
        draft.posts = [];
        draft.fail = {
          message: "Posts Get Error",
        };
        break;
      }
      case ActionTypes.POST_GET_REQUEST: {
        // 요청할 때는 데아터를 새로 받기 때문에 초기화해주는 게 좋음.
        draft.isShow = false;
        draft.isLoading = true;
        draft.activeId = data;
        draft.post = {};
        draft.fail = initialState.fail;
        break;
      }
      case ActionTypes.POST_GET_SUCCESS: {
        draft.isShow = true;
        draft.isLoading = false;
        draft.post = data.data;
        break;
      }
      case ActionTypes.POST_GET_FAILURE: {
        draft.isShow = false;
        draft.isLoading = false;
        draft.post = {};
        draft.fail = {
          message: "Post Get Error",
        };
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default reducer;
