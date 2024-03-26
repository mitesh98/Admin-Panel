import { useEffect, useState } from "react";

export default function Exp1() {
  const [isFancy, setIsFancy] = useState(false);
  const [d2, setD2] = useState("papapapapa");
  let d1 = "Mitesh";
  useEffect(() => {
    const timerId = setTimeout(() => {
      d1 = "XXXXXXXXX";
      console.log("d1", d1);
      setD2("nananananana");
    }, 2000);
    // return () => {
    //   clearTimeout(timerId);
    // };
  }, []);

  return (
    <div>
      {isFancy ? (
        <Counter isFancy={true} dancer={d1} />
      ) : (
        <Counter isFancy={false} dancer={d2} />
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy, dancer }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);
  console.log("Rerendering Counter .....");
  let className = "counter";
  if (hover) {
    className += " hover";
  }
  if (isFancy) {
    className += " fancy";
  }

  return (
    <div
      className={className}
      //   onPointerEnter={() => setHover(true)}
      //   onPointerLeave={() => setHover(false)}
    >
      <h1>{dancer}</h1>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
