import { useContext } from "react";
import { ComponentC } from "./ComponentC";
import { AppCounterContext } from "../contexts";

export const ComponentB: React.FC = () => {
  const context = useContext(AppCounterContext);
  return (
    <>
      <h2>Component B</h2>
      Current Count:
      <div>{context?.state.count ?? ""}</div>
      <button onClick={() => context?.dispatch({ name: "reset" })}>Reset</button>
      <hr />
      <ComponentC />
    </>
  );
};
