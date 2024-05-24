import React from "react";
import Switcher from "./components/Switcher";

const App = () => {
  return (
    <div className="dark:bg-[grey]">
      <Switcher />

      <div className="bg-blue-600 text-black dark:bg-gray-500 dark:text-white">
        <p className="">hello</p>
      </div>
    </div>
  );
};

export default App;
