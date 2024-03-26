export default function ColorSwitch({ onChangeColor }) {
  const handleClick = (event) => {
    event.stopPropagation();
    onChangeColor();
  };
  return <button onClick={handleClick}>Change color</button>;
}
