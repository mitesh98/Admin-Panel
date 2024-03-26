import { useEffect, useState } from "react";
import { addItem } from "../Stores/cartStore";
import { useDispatch } from "react-redux";
export default function SearchProducts() {
  console.log("Rerendering ...");
  const [searchText, setSearchText] = useState("");
  const url = "https://dummyjson.com/products/search?q=";
  const [products, setProducts] = useState([{ title: "No Product" }]);
  useEffect(() => {
    console.log("Fetching...");
    fetch(`${url}${searchText}`).then((data) => {
      data.json().then((prod) => {
        console.log("prod", prod);
        setProducts(prod.products);
      });
    });
  }, [searchText]);
  const [count, setCount] = useState(0);
  //   useState(()=>{
  //     console.log('state',count)
  //   })
  // setTimeout(() => {
  //   setCount(count + 1);
  // }, 1000);
  const dispatch = useDispatch();
  const addingItem = (product) => {
    // debugger
    dispatch(addItem(product));
  };
  return (
    <div>
      <div>Timer:{count}</div>
      <input
        type="text"
        value={searchText}
        onChange={($event) => setSearchText(event.target.value)}
      />
      <div>Searching For : {searchText}</div>
      <h1>Products </h1>
      {products.map((product) => {
        return (
          <div key={product.id} style={{ margin: "10px" }}>
            <span>{product.title}</span>
            <button
              style={{ "margin-left": "10px" }}
              onClick={() => addingItem(product)}
            >
              +Add
            </button>
          </div>
        );
      })}
    </div>
  );
}
