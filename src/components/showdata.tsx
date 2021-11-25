import { Button } from "@material-ui/core";
//import app from "./base";
import { getAuth } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/action";

function ShowData() {
  const { posts, loading } = useSelector((state: any) => ({ ...state.posts }));

  const dispatch = useDispatch();
  return (
    <>
      <div>ShowData</div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Fetch Data
      </Button>
      {!loading ? (
        // posts.map((post: any) => <h4>{post.body}</h4>)
        // console.log(posts)
        <div>hello</div>
      ) : (
        <h3>Loading...</h3>
      )}
      <Button
        variant="contained"
        color="secondary"
        onClick={() => getAuth().signOut()}
      >
        Sign Out
      </Button>
    </>
  );
}

export default ShowData;
