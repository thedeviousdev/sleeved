import { useState } from "react";
import "./style/App.css";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Hi Mat, I wonder if you'll notice this has updated ;D</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
