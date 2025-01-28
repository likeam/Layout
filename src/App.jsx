import React, { Children } from "react";
import SplitScreen from "./components/SplitScreen";
import Left from "./components/Left";
import Right from "./components/Right";

const App = ({ Children }) => {
  return (
    <>
      <SplitScreen leftWeight={15} rightWeight={80}>
        <Left />
        <Right />
      </SplitScreen>
    </>
  );
};

export default App;
