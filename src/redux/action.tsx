import * as types from "./actiontypes";

const fetchPostStart = () => ({
  type: types.FETCH_POST_START,
});

const fetchPostSuccess = (posts: any) => ({
  type: types.FETCH_POST_SUCCESS,
  payload: posts,
});
const fetchPostFail = (error: any) => ({
  type: types.FETCH_POST_FAIL,
  payload: error,
});

export function fetchPosts() {
  return async function (dispatch: any) {
    dispatch(fetchPostStart());
    await fetch("https://www.breakingbadapi.com/api/")
      .then((res: any) => {
        console.log(res);

        // const posts = res.data;
        // dispatch(fetchPostSuccess(posts));
      })
      .catch((error) => {
        dispatch(fetchPostFail(error));
      });
  };
}
