import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import TableAll from "./components/TableAll";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="">
        <TableAll />
      </div>
    </div>
  );
}

export default App;
