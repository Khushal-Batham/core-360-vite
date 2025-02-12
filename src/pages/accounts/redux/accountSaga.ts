import { put, call, delay, debounce, takeEvery } from 'redux-saga/effects';

import { fetcher } from 'src/common/fetcher';

import { increment } from './counterSlice';
import { fetchPostsFailure, fetchPostsSuccess } from './postSlice';

const fetchUsersPostFromAPI = async () => {
  const response = await fetcher('https://jsonplaceholder.typicode.com/posts');
  return response;
};

function* fetchUsersPostSaga(): Generator {
  try {
    const data: any[] = yield call(fetchUsersPostFromAPI);
    yield put(fetchPostsSuccess(data));
  } catch (error: any) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* incrementAsync(): Generator {
  yield delay(1000); // Simulated async operation
  yield put(increment());
}

export function* watchFetchUsersPost() {
  yield debounce(5000, 'post/fetchPostsRequest', fetchUsersPostSaga);
}

export function* watchIncrementAsync() {
  yield takeEvery('counter/incrementAsync', incrementAsync);
}
