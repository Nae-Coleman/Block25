export default function PlantCard({ plant, addToCart }) {
  return (
    <div className="plant-card">
      <div className="plant-image">{plant.image}</div>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </div>
  );
}
