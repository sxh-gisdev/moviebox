import { Button } from "@material-ui/core";
import {
  DataGridPro,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid-pro";
import { getAuth } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { GetCharacters } from "../../../redux/actions/bbActions";
import { RootStore } from "../../../redux/store";
import { AuthContext } from "../../auth/authContext";

function Home() {
  // const [tableData, setTableData] = useState<Array<any>>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const navigate = useNavigate();
  const characterState = useSelector((state: RootStore) => state.breaking);
  const user = useContext(AuthContext);
  const dispatch = useDispatch();
  console.log(characterState);
  // const [firstRenderDone, setFirstRenderDone] = useState(false);
  useEffect(() => {
    dispatch(GetCharacters());
    //setFirstRenderDone(true);
  }, []);

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
      </GridToolbarContainer>
    );
  }

  const char_id = characterState.character?.map((char) => char.char_id);
  const name = characterState.character?.map((char) => char.name);
  const birthday = characterState.character?.map((char) => char.birthday);
  const nickname = characterState.character?.map((char) => char.nickname);
  const portrayed = characterState.character?.map((char) => char.portrayed);
  const category = characterState.character?.map((char) => char.category);
  const status = characterState.character?.map((char) => char.status);

  const columns = [
    { field: "char_id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 300 },
    { field: "birthday", headerName: "Birthday", width: 300 },
    { field: "status", headerName: "Status", width: 300 },
    { field: "nickname", headerName: "Nickname", width: 300 },
    { field: "portrayed", headerName: "Portrayed", width: 300 },
    { field: "category", headerName: "Category", width: 300 },
  ];

  // const [rowdt, setrowdt] = useState<Array<any>>();

  // useEffect(() => {
  //   if (firstRenderDone) {
  //     const rows = characterState?.character?.map((char) => {
  //       return {
  //         id: char?.char_id,
  //         char_id: char?.char_id,
  //         name: char?.name,
  //         birthday: char?.birthday,
  //         status: char?.status,
  //         nickname: char?.nickname,
  //         portrayed: char?.portrayed,
  //         category: char?.category,
  //       };
  //     });
  //     console.log(rows);

  //     setrowdt(rows);
  //   }
  // }, [firstRenderDone]);

  // console.log("rows", rowdt);

  const rows = [
    {
      id: 2,
      char_id: char_id,
      name: name,
      birthday: birthday,
      nickname: nickname,
      portrayed: portrayed,
      category: category,
      status: status,
    },
  ];

  return (
    <>
      <div>
        <h3>Welcome {user?.email}</h3>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => getAuth().signOut()}
        >
          Sign Out
        </Button>
      </div>
      <div style={{ width: "100%" }}>
        <DataGridPro
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[10, 20, 40]}
          pagination
          autoHeight
          components={{
            Toolbar: CustomToolbar,
          }}
          onRowDoubleClick={() => {
            navigate(`/character/${rows?.map((row) => row?.id)}`, {
              replace: true,
            });
          }}
        />

        {/* <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Birthday</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Nickname</TableCell>
                <TableCell align="right">Portrayed</TableCell>
                <TableCell align="right">Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {row.char_id}
                    <TableCell align="right">{row.name}</TableCell>
                  </TableCell>
                  <TableCell align="right">{row.birthday}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.nickname}</TableCell>
                  <TableCell align="right">{row.portrayed}</TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}
      </div>
    </>
  );
}

export default Home;
