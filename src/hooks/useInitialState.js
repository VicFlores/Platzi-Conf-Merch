import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [
        ...state.cart,
        payload,
      ] /* trae lo que tiene cart en ese momento y le agrega lo que yo le mande */,
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
