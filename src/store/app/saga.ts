import { all, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { setName } from './slice';

function* watchSetName({ type, payload }: PayloadAction<String>) {
  console.log(type, payload)
}

export const rootSaga = function* appSaga() {
  yield all([
    takeEvery(setName.type, watchSetName)
  ]);
}
