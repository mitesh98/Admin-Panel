import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useState(()=>{
    console.log('state',count)
  })
  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  return <div>Counter: {count}</div>;
}
