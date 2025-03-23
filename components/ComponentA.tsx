import "./ComponentA.css";
import { ComponentB } from "./ComponentB";
import { useContext, useState } from "react";
import { AppCounterContext } from "../contexts";

export const ComponentA: React.FC = () => {
  const context = useContext(AppCounterContext);
  const [step, setStep] = useState(context?.state.step);

  return (
    <div className="main">
      <h1>Component A</h1>
      <form>
        <div>
          <label htmlFor="step">Step</label>
          <input
            id="step"
            type="text"
            value={step}
            onChange={(e) => {
              const newStep = Number(e.target.value);
              context?.dispatch({ name: "setStep", payload: { newStep } });
              setStep(newStep);
            }}
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
