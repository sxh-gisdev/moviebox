export const CHARACTER_LOADING = "CHARACTER_LOADING";
export const CHARACTER_FAIL = "CHARACTER_FAIL";
export const CHARACTER_SUCCESS = "CHARACTER_SUCCESS";

export type CharacterInfo = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: Array<string>;
  img: string;
  status: string;
  nickname: string;
  appearance: Array<number>;
  portrayed: string;
  category: string;
  better_call_saul_appearance: Array<number>;
};

export interface CharacterLoading {
  type: typeof CHARACTER_LOADING;
}

export interface CharacterFail {
  type: typeof CHARACTER_FAIL;
}

export interface CharacterSuccess {
  type: typeof CHARACTER_SUCCESS;
  payload: {
    characters: CharacterInfo;
  };
}

export type CharacterDispatchTypes =
  | CharacterLoading
  | CharacterFail
  | CharacterSuccess;
