import React from "react";
import MainScreen from "../main-screen/main-screen";


const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {offersCount} = props;

  return (
    <MainScreen offersCount={offersCount} />
  );
};


export default App;
