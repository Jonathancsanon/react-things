function Item({ name, isPacked, importance }) {
  return (
    <li className="item">
      {/* {isPacked ? name + "✔" : name + "❌"} */}
      {name} {importance > 0 && <i>(Importance:{importance})</i>}
      {isPacked ? "✔" : "❌"}
    </li>
  );
}
export default Item;
