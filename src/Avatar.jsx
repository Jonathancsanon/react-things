import { getImageUrl } from "./utils";

function Avatar({ person, size }) {
  let imageId = size < 90 ? "s" : "b";
  //   let size = size < 90 ? "s" : "b";
  return (
    <img
      className="avatar"
      src={getImageUrl(person.imageId)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default Avatar;
