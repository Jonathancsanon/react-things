import Item from "./Item";

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item importance={9} isPacked={true} name="Space suit" />
        <Item importance={0} isPacked={true} name="Helmet with a golden leaf" />
        <Item importance={9} isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
