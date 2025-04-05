import { useState } from "react";

export function useAmount(quantity) {
  const [amount, setAmount] = useState(quantity);

  function addAmount() {
    setAmount((prevAmount) => prevAmount + 1);
  }

  function subtractAmount() {
    setAmount((prevAmount) => (prevAmount > 1 ? prevAmount - 1 : 1));
  }

  return { amount, addAmount, subtractAmount };
}
