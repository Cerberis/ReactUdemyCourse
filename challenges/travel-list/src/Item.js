export default function Item({ item, onDeleteItem, onToggleItem }) {
  const spanStyle = item.packed ? { textDecoration: "line-through" } : {};
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        checked={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      ></input>
      <span style={spanStyle}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
