import { useMemo } from 'react';
import { generateRandomNumber } from './utils/util';
import UserInput from './components/UserInput/UserInput';
import './App.css';

function App() {
  const wordBoard = useMemo(() => {
    return new Array(30)
      .fill(0)
      .map(() =>
        new Array(60)
          .fill(0)
          .map(() => String.fromCharCode(generateRandomNumber(97, 122)))
      );
  }, []);
  return (
    <div className="App">
      <h1>Word Search</h1>
      <UserInput wordBoard={wordBoard} />
    </div>
  );
}

export default App;
