import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/index';

export const namespace = 'app';

export type appState = {
  name: String,
  owner: String
}

const initialState: appState = {
  name: 'My App',
  owner: 'Nhan Nguyen'
}

const appSlice = createSlice({
  name: namespace,
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<String>) => {
      state.name = action.payload
    }
  }
})

export const {
  setName
} = appSlice.actions;

export const { reducer } = appSlice;
export const selectApp = (state: RootState) => state[namespace];
export { rootSaga as saga } from './saga';