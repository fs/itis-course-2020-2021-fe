import { useState } from 'react';
import './App.css';
import Examples from './examples';

const initialList = [{ name: 'Скачать и попробовать установить ESLnt и Prettier' }];

function App() {
  const [list, setList] = useState(initialList);
  const addToList = (newElement) => setList([...list, { name: newElement }]);
  const exampleProps = {
    size: 5,
    error: false,
    list,
    addToList,
  };
  return (
    <div className="App">
      <Examples {...exampleProps}>Example One</Examples>
    </div>
  );
}

export default App;
