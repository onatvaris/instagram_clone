import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';
export const rootReducer = combineReducers({
    userResponse: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;