import Avatar from "./Avatar";
import Card from "./Card";

export function Profile({
  name,
  size,
  profession,
  awards,
  discovered,
  imageId,
}) {
  return (
    <>
      <Card>
        <Avatar person={{ name, imageId }} size={size} />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: </b>
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </Card>
    </>
  );
}
// export function Profile({person, size = 70, profession, awards, discovered }){
//   const imgUrl = getImageUrl(person);
//   return (
//     <>
//       <h2>{person.name}</h2>
//         <img
//           person={{ name }}
//           size={size}
//           src = {imgUrl}

//         />
//      <p><b>Profession: </b>{profession}</p>
//       <p><b>Awards: </b>{awards}</p>
//       <p><b>Discovered: </b>{discovered}</p>
//     </>
//   );
// }
