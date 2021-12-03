import axios from "axios";
import { Dispatch } from "redux";
import {
  CharacterDispatchTypes,
  //CharacterInfo,
  CHARACTER_FAIL,
  CHARACTER_LOADING,
  CHARACTER_SUCCESS,
} from "./bbActionTypes";

export const GetCharacters =
  () => async (dispatch: Dispatch<CharacterDispatchTypes>) => {
    try {
      dispatch({
        type: CHARACTER_LOADING,
      });
      const res = await axios.get(
        `https://www.breakingbadapi.com/api/characters/`
      );

      dispatch({
        type: CHARACTER_SUCCESS,
        payload: {
          characters: res.data,
        },
      });
    } catch (e) {
      dispatch({
        type: CHARACTER_FAIL,
      });
    }
  };
