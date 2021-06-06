import { Fragment } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Meals />
      {/* <Cart /> */}
    </Fragment>
  );
};

export default App;
