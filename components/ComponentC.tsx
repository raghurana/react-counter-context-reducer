import { useContext } from "react";
import { AppCounterContext } from "../contexts";

export const ComponentC: React.FC = () => {
  const context = useContext(AppCounterContext);
  return (
    <>
      <h3>Component C</h3>
      <button onClick={() => context?.dispatch({ name: "increment" })}>Incrememnt</button>
      <button onClick={() => context?.dispatch({ name: "decrement" })}>Decrement</button>
    </>
  );
};
