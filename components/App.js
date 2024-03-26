import PrgressBar from "./ProgressBar";
import Counter from "./Counter";
import TodoList from "./TodoList";
import SearchProducts from "./SearchProducts";
import Header from "./Header";
import Exp1 from "./exp-1";
import MoveLeftRight from "./MoveLeftRight";
export default function App() {
  const size = 10;
  const per = Array(size);
  for (let index = 0; index <= size; index++) {
    const value = (100 / size) * index;
    per.push(value);
  }
  return (
    <>
      <MoveLeftRight />
      {/* <TodoList /> */}
      {/* <Exp1 /> */}
      {/* <Header />
      <SearchProducts /> */}
      {/* <Counter /> */}
      {/* <div>App Component</div>
      {per.map((value, index) => {
        return <PrgressBar key={index} progress={value} />;
      })} */}
    </>
  );
}
