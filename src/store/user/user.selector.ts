import { createSelector } from 'reselect';

import { UserState } from './user.reducer';

export const selectUserReducer = (state: { user: UserState }): UserState =>
  state.user;

export const selectCurentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);
