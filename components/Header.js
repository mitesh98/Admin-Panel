import { useSelector } from "react-redux";
export default function Header() {
  const cartItem = useSelector((store) => {
    console.log("Store", store);
    return store.cart.items;
  });
  return (
    <>
      <div>Cart: {cartItem.length} </div>
      <div>Product Added</div>
      {cartItem.map((item) => {
        return <h1>{item.title}</h1>;
      })}
    </>
  );
}
