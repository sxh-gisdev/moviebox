import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useParams } from "react-router";
import { TextField } from "@material-ui/core";
import { db } from "../../auth/base";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../auth/authContext";
import axios from "axios";
import { Wrapper } from "../../styles/card.styles";
import Comments from "./comments";

export default function CharacterCard() {
  const navigate = useNavigate();
  const { characterId } = useParams();

  const [character, setCharacter] = useState<Array<any>>();

  useEffect(() => {
    fetchChar();
  }, []);

  const fetchChar = async () => {
    const res = await axios.get(
      `https://www.breakingbadapi.com/api/characters/${characterId}`
    );
    const char = await res.data;
    setCharacter(char);
  };

  const name = character?.map((char) => char.name);
  const birthday = character?.map((char) => char.birthday);
  const nickname = character?.map((char) => char.nickname);
  const occupation = character?.map((char) => char.occupation);
  const portrayed = character?.map((char) => char.portrayed);
  const image = character?.map((char) => char.img);
  const appearance = character?.map((char) => char.appearance);
  const bettercall = character?.map((char) => char.better_call_saul_appearance);
  const category = character?.map((char) => char.category);
  const status = character?.map((char) => char.status);

  const handleGoBack = () => {
    navigate("/", { replace: true });
  };
  const currentUser = useContext(AuthContext);
  const commentRef = useRef<HTMLInputElement>(null);

  const handlePostComment = async (e: any) => {
    e.preventDefault();
    await addDoc(collection(db, "comments"), {
      body: commentRef.current?.value,
      characterId: characterId,
      username: currentUser?.email,
    });
  };

  //const [comments, setComments] = useState<Array<object>>();
  // const [comm, setComm] = useState<Array<any>>();
  // const handleGetComments = async () => {
  //   const q = query(
  //     collection(db, "comments"),
  //     where("characterId", "==", characterId)
  //   );

  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     const com = doc.data();
  //     renderComments(com);
  //   });
  // };
  // const renderComments = (doc: any) => {
  //   // console.log("body", doc.body);
  //   // console.log("user", doc.username);
  //   console.log(doc);

  //   //<Typography> {doc.username} </Typography>;
  //   setComm(doc.body);
  // };
  return (
    <Wrapper>
      <Card className="card">
        <CardMedia
          className="img"
          component="img"
          height="400"
          src={image?.toString()}
          alt="char name here"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="inherit" color="text.secondary">
            Birthday: {birthday}
          </Typography>
          <Typography variant="inherit" color="text.secondary">
            Status: {status}
          </Typography>
          <Typography variant="inherit" color="text.secondary">
            Nickname: {nickname}
          </Typography>
          <Typography variant="inherit" color="text.secondary">
            Portrayed: {portrayed}
          </Typography>
          <Typography variant="inherit" color="text.secondary">
            Occupation: {occupation}
          </Typography>
          <Typography variant="inherit" color="text.secondary">
            Category: {category}
          </Typography>
          <Typography variant="inherit" color="text.secondary">
            Appearance: {appearance}
          </Typography>
          <Typography variant="inherit" color="text.secondary">
            Better Call Appearance: {bettercall}
          </Typography>
        </CardContent>
        <CardContent>
          <TextField
            id="comments"
            fullWidth
            placeholder="Post a comment"
            multiline
            minRows={4}
            maxRows={8}
            inputRef={commentRef}
          />
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={handlePostComment}
            >
              Comment
            </Button>
          </CardActions>
          <Typography variant="body2" color="text.secondary">
            <Comments characterId={characterId} />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleGoBack}
          >
            Go Back
          </Button>
        </CardActions>
      </Card>
    </Wrapper>
  );
}
