export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list!</em>
      </p>
    );
  }

  const totalItems = items.length;
  const totalPackedItems = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((totalPackedItems / totalItems) * 100, 0);

  const message =
    percentagePacked === 100 ? (
      <em>You got everything! ready to go ✈️</em>
    ) : (
      <em>
        📦 You have {totalItems} items on your list, and you already have packed{" "}
        {totalPackedItems} ({percentagePacked})%
      </em>
    );
  return <footer className="stats">{message}</footer>;
}
