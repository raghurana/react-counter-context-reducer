import "./App.css";
import { useReducer } from "react";
import { ComponentA } from "./components";
import { counterStateReducer } from "./reducers";
import { AppCounterContext } from "./contexts";

function App() {
  const [state, dispatch] = useReducer(counterStateReducer, {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
  });

  return (
    <AppCounterContext.Provider value={{ state, dispatch }}>
      <ComponentA />
    </AppCounterContext.Provider>
  );
}

export default App;
