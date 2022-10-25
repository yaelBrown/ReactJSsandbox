import "./App.css";
import Left from "./component/Left";
import Right from "./component/Right";

import { useTabIndex } from 'react-tabindex';

function App() {
  const tabIndex = useTabIndex()

  return (
    <div className="App">
      <div className="container">
        <Left tabIdx={tabIndex}/>
        <Right tabIdx={tabIndex}/>
      </div>
    </div>
  );
}

export default App;
