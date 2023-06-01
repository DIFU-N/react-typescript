import { useReducer } from "react";

type CounterState = {
    count: number,
}

// this is known as discriminated unions and it is the preferred way to call useReducer actions
type UpdateAction = {
    //strict action types
    type: 'increment' | 'decrement'
    payload: number
}
// this is known as discriminated unions and it is the preferred way to call useReducer actions
type ResetAction = {
    //strict action types
    type: 'reset'
}

// this is known as discriminated unions and it is the preferred way to call useReducer actions
// A discriminated type union is where you use code flow
// analysis to reduce a set of potential objects down to one
// specific object.
//this is the preferred way to define strict types with useReducer
type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
        return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
  <>
    Count: {state.count}
    <button onClick={() => dispatch({type: 'increment', payload: 10})}>
        Increment 10
    </button>
    <button onClick={() => dispatch({type: 'reset'})}>
        Reset
    </button>
    <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
        Decrement 10
    </button>
  </>
  );
};
