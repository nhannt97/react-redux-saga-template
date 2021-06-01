import { all, fork } from 'redux-saga/effects';
/* eslint-disable no-undef */
const moduleReducer = require.context('.', true, /slice.ts/);

const reducers: any = {};
const sagas: any[] = [];

moduleReducer.keys().forEach((file: any) => {
  const module = moduleReducer(file);
  if (module.reducer) {
    reducers[module.namespace] = module.reducer;
  }
  if (module.saga) {
    sagas.push(module.saga);
  }
});

export const rootReducer = reducers;

export function* rootSaga() {
  yield all([
    ...sagas.map((saga) => fork(saga))
  ])
} 
