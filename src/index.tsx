import * as React from "react";
import { render } from "react-dom";

function App() {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Hello, Tailwind!
      </button>
    </div>
  );
}

render(<App />, document.getElementById("app"));
