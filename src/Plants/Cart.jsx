export default function Cart({ cart, increaseQuantity, decreaseQuantity }) {
  return (
    <div className="cart">
      <h2>🛒 Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.image} {item.name} × {item.quantity}
              <button onClick={() => increaseQuantity(item)}>+</button>
              <button onClick={() => decreaseQuantity(item)}>-</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
