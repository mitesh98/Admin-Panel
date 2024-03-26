import { useState } from "react";

export default function TodoList() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  return (
    <div>
      <div>Todo</div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={() => {
        //   list.push(text);
        //   console.log(text, list);
          setList([...list,text]);

        //   console.log(text, list);
        }}
      >
        Add Todo
      </button>
      {console.log(text, list)}
      {
        <ul>
          {list.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      }
    </div>
  );
}
