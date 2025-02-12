import { Button } from '@mui/material';

import { increment, decrement } from '../../redux/counterSlice';
import { useAppDispatch, useAppSelector } from '../../../../hook/hooks';
import { fetchPostsReset, fetchPostsRequest } from '../../redux/postSlice';

export function Counter() {
  const dispatch = useAppDispatch();

  const count = useAppSelector((state) => state.counter.value);
  const { postError, posts, postLoading } = useAppSelector((state) => state.post);
  console.log('🚀 ~ Counter ~ postError, posts, postLoading:', postError, posts, postLoading);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <Button color="info" onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Button color="info" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
      <Button
        color="info"
        disabled={posts?.length > 1}
        onClick={() => dispatch(fetchPostsRequest())}
      >
        Fetch Posts
      </Button>
      <Button
        color="info"
        disabled={postLoading}
        onClick={() => !postLoading && dispatch(fetchPostsReset())}
      >
        Fetch reset
      </Button>
      {postLoading && <p>Loading</p>}
      {postError && <p>postError</p>}
      {posts &&
        posts.map((post) => (
          <p key={post.id}>
            {post.id}. {post.title}
          </p>
        ))}
    </div>
  );
}
