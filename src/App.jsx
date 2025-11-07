import { useState } from "react";
import PLANTS from "./data";
import PlantCard from "./Plants/PlantCard";
import Cart from "./Plants/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const existing = cart.find((item) => item.id === plant.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
  }
  function increaseQuantity(plant) {
    setCart(
      cart.map((item) =>
        item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function decreaseQuantity(plant) {
    setCart(
      cart
        .map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(plant) {
    setCart(cart.filter((item) => item.id !== plant.id));
  }

  return (
    <div>
      <h1>Proper Plants</h1>
      <div className="plant-grid">
        {PLANTS.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
    </div>
  );
}
