import { combineReducers } from '@reduxjs/toolkit';

import sidebarSlice from '~/components/custom/app-panel/sidebar.slice';

export const rootReducer = combineReducers({
  sidebar: sidebarSlice.reducer,
});
