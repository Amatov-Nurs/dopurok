import './core.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, loadSelect, usersSelect} from "./redux/slices/usersSlice";
import {CircularProgress} from "@mui/material";

function App() {
    const dispatch = useDispatch();
    const users = useSelector(usersSelect);
    const load = useSelector(loadSelect);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
  return (
      <>
          <ul>
              {
                  load ?
                      users.map((user, key) => <li key={key}>{user.name}</li>)
                      : <CircularProgress/>
              }
          </ul>
      </>
  );
}

export default App;
