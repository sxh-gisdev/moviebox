import { Typography } from "@material-ui/core";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { query, collection, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../auth/base";

export default function Comments(props: { characterId: string | undefined }) {
  useEffect(() => {
    handleGetComments();
  }, []);
  const [comm, setComm] = useState<Array<any>>();

  const handleGetComments = async () => {
    const q = query(
      collection(db, "comments"),
      where("characterId", "==", props.characterId)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const comments: any[] = [];
      querySnapshot.forEach((doc) => {
        comments.push(doc.data());
      });
      renderComments(comments);
    });
  };

  const renderComments = (doc: any) => {
    setComm(doc.map((c: any) => c.body));
    console.log(doc.map((c: any) => c.body));
  };

  return <div>{comm}</div>;
}
