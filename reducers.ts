import { Actions, CounterState } from "./types";

export const counterStateReducer = (state: CounterState, action: Actions): CounterState => {
  switch (action.name) {
    case "increment":
      return state.count + state.step <= state.max ? { ...state, count: state.count + state.step } : state;
    case "decrement":
      return state.count - state.step >= state.min ? { ...state, count: state.count - state.step } : state;
    case "setStep":
      return { ...state, step: action.payload.newStep };
    case "reset":
      return { ...state, count: 0 };
  }
};
