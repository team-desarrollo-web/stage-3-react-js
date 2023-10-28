import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const count = useSelector((state) => state.counter.value);

  return <span>{count}</span>;
};

export default Cart;
