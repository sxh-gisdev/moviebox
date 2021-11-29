import { Button } from "@material-ui/core";
//import app from "./base";
import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetCharacters } from "../../../redux/actions/bbActions";
import { AuthContext } from "../../auth/authContext";

function ShowData() {
  const { posts, loading } = useSelector((state: any) => ({ ...state.posts }));
  const user = useContext(AuthContext);

  const dispatch = useDispatch();
  return (
    <>
      <div>ShowData</div>
      <h2>{user?.email}</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(GetCharacters())}
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
