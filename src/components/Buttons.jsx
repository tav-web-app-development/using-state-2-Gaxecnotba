import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductCard from "./components/ProductCard";

export default function ButtonFunction() {
  const [itemsInCart, setItemsInCart] = useState(1);
  return (
    <>
      <ProductCard
        itemsInCart={itemsInCart}
        ClickItemsInCart={() => setItemsInCart(itemsInCart + 1)}
      />
      <ProductCard />
    </>
  );
}
