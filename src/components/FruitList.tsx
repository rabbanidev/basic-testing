export default function FruitList({ fruits }: { fruits: string[] }) {
  return (
    <div className="fruit-container">
      <h2>Fruit List 🍎</h2>

      <ul className="fruit-list">
        {fruits.map((fruit, index) => (
          <li key={index} className="fruit-item">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}
