function Item({ name, isPacked }) {
  return (
    <li className="item">
      {/* {isPacked ? name + "✔" : name + "❌"} */}
      {name} {isPacked ? "✔" : "❌"}
    </li>
  );
}
export default Item;
