import React from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { selectApp, appState, setName } from 'store/app/slice';

function App() {
  const { name, owner }: appState = useAppSelector(selectApp);
  const dispatch = useAppDispatch();

  const handleChangeAppName = () => dispatch(setName("New App"));

  return (
    <div className="App">
      <h1>React Redux Toolkit Saga Template</h1>
      <h2>{name}</h2>
      <button onClick={handleChangeAppName}>Change App Name</button>
      <h3>{owner}</h3>
    </div>
  );
}

export default App;
