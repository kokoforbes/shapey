import { combineReducers } from 'redux';
import filterReducer, { FilterStateInterface } from './filter/filter.reducer';
import userReducer, { UserStateInterface } from './user/user.reducer';

export interface ApplicationState {
  user: UserStateInterface;
  filter: FilterStateInterface;
}

const rootReducer = combineReducers({
  user: userReducer,
  filter: filterReducer,
});

export default rootReducer;