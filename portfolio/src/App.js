import './App.css';
import { convertToMorse } from './morseCode'

function App() {
  const test = "acbee3487"
  console.log(convertToMorse(test))
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
