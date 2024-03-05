import { Profile } from "./Profile";
export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (chemical element)"
        imageId="szV5sdG"
        size={40}
      />
      <Profile
        name="Katsuko Saruhashi"
        profession="geochemist"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
        discovered="polonium (chemical element)"
        imageId="YfeOqp2"
        size={100}
      />
    </section>
  );
}

// export default function Gallery() {

//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile

//         <h2>Maria Skłodowska-Curie</h2>
//         <
//           person = {{
//           name:'Maria Skłodowska-Curie',
//           imageId:'szV5sdG',
//           size={size}

//           }}

//           profession="physicist and chemist"
//           awards='(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'
//           discovered='polonium (chemical element)'
//         />

//       <Profile
//         <h2>Katsuko Saruhashi</h2>
//         <
//           person={{
//           name:'Katsuko Saruhashi',
//           imageId:'YfeOqp2',
//           size={size}
//           }}

//           profession="geochemist"
//           awards='(Miyake Prize for geochemistry, Tanaka Prize)'
//           discovered='a method for measuring carbon dioxide in seawater'
//         />

//   );
// }
