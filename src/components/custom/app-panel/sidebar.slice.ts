import { createSlice } from '@reduxjs/toolkit';

export interface SidebarState {
  isOpen: boolean;
  showSidebar: boolean;
}

const initialState = {
  isOpen: true,
  showSidebar: true,
} satisfies SidebarState as SidebarState;

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isOpen = !state.isOpen;
    },
    toggleShowSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggleSidebar, toggleShowSidebar } = sidebarSlice.actions;

export const selectSidebar = (state: { sidebar: SidebarState }) =>
  state.sidebar;

export default sidebarSlice;
