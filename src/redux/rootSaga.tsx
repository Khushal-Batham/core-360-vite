import { all } from 'axios';

import { watchFetchUsersPost, watchIncrementAsync } from 'src/pages/accounts/redux/accountSaga';

// Root Saga
export default function* rootSaga(): Generator {
  yield all([watchIncrementAsync(), watchFetchUsersPost()]);
}
