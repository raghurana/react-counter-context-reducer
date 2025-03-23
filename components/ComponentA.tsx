import "./ComponentA.css";
import { ComponentB } from "./ComponentB";
import { useContext } from "react";
import { AppCounterContext } from "../contexts";

export const ComponentA: React.FC = () => {
  const context = useContext(AppCounterContext);
  return (
    <div className="main">
      <h1>Component A</h1>
      <form>
        <div>
          <label htmlFor="step">Step</label>
          <input
            id="step"
            type="text"
            value={context?.state.step}
            onChange={(e) => context?.dispatch({ name: "setStep", payload: { newStep: Number(e.target.value) } })}
          />
        </div>

        <div>
          <label htmlFor="step">Min</label>
          <input id="min" type="text" value={context?.state.min} readOnly />
        </div>

        <div>
          <label htmlFor="step">Max</label>
          <input id="max" type="text" value={context?.state.max} readOnly />
        </div>
      </form>

      <hr />
      <ComponentB />
    </div>
  );
};
