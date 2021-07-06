import { Reducer } from 'redux';

export interface UserStateInterface {
  currentUser?: string;
  isLoggedIn: boolean;
}

const initialState: UserStateInterface = {
  currentUser: undefined,
  isLoggedIn: false,
};

const userReducer: Reducer<UserStateInterface> = (state = initialState, action) => {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
      };
    case 'removeUser':
      return {
        ...state,
        currentUser: undefined,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;