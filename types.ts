export type CounterState = {
  count: number;
  step: number;
  min: number;
  max: number;
};

export type Actions =
  | { name: "increment" }
  | { name: "decrement" }
  | { name: "reset" }
  | { name: "setStep"; payload: { newStep: number } };

export type CounterContext = {
  state: CounterState;
  dispatch: React.ActionDispatch<[Actions]>;
};
