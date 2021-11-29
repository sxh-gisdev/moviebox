import {
  CharacterDispatchTypes,
  CharacterInfo,
  CHARACTER_FAIL,
  CHARACTER_LOADING,
  CHARACTER_SUCCESS,
} from "../actions/bbActionTypes";

interface DefaultStateI {
  loading: boolean;
  character?: CharacterInfo;
}

const defaultState: DefaultStateI = {
  loading: false,
};

const breakingReducer = (
  state: DefaultStateI = defaultState,
  action: CharacterDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case CHARACTER_FAIL:
      return {
        loading: false,
      };
    case CHARACTER_LOADING:
      return {
        loading: true,
      };
    case CHARACTER_SUCCESS:
      return {
        loading: false,
        character: action.payload.characters,
      };
    default:
      return state;
  }
};

export default breakingReducer;
