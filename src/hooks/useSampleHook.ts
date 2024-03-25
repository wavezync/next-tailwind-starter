import { useState } from "react";

export const useCounterHook = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, increment };
};
