import { getImageUrl } from "./utils";

function Avatar({ person, size = 50 }) {
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
