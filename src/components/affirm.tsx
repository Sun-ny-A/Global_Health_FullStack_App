import { useState, useEffect } from "react";
import greenery from "../assets/greenery.jpg";
import streak from "../assets/streak.jpg";


// const Affirmation = () => {
//     const [affirmation, setAffirmation] = useState("")
//     const [error, setError] = useState("")

//     useEffect(() => {
//         fetchAffirmation()
//     }, [])

//     async function fetchAffirmation() {
//         const res = await fetch("https://www.affirmations.dev/", {
//             method: "GET"
//         })
//         if (res.ok) {
//             const data = await res.json()
//             setAffirmation(data.affirmation)
//         } else {
//             setError("I'm sorry, we're having trouble loading today's affirmation. Try reloading or check back again later.")
//         }
//     }

//     return (
//         <div className="div-affirm-greenery">
//             <img src={streak} className="img-streak"/>
//             <h2 className="today-affirm">Today's Affirmation
//                 <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet"></link>
//             </h2>
//             <img src={greenery} className="img-greenery" />
//             <div className="affirm-text-overlay">
//                 {error ? (
//                     <p>{error}</p>
//                 ) : (
//                     <p>{affirmation}</p>
//                 )}
//             </div>
//         </div>
//     )
// }


const sayings = [
    "Mistakes don't make you less capable",
    "You know more than you knew yesterday",
    "I know you'll sort it out",
    "The opposite of courage in our society is not cowardice... it is conformity",
    "I believe in you",
    "You're an inspiration",
    "It's not a mistake, it's a learning opportunity",
    "Don't forget to enjoy the journey",
    "Nothing is impossible. The word itself says 'I am possible!'",
    "Everything has cracks - that's how the light gets in",
    "You are learning valuable lessons from yourself every day",
  ];
  
  const Affirmation = () => {
    const [randomSaying, setRandomSaying] = useState("")
  
    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * sayings.length)
      setRandomSaying(sayings[randomIndex]);
    }, [])
  
    return (
      <div className="div-affirm-greenery">
        <img src={streak} className="img-streak" />
        <h2 className="today-affirm">Today's Affirmation</h2>
            <link href="https://fonts.googleapis.com/css2?family=Allura&display=swap" rel="stylesheet"></link>
        <img src={greenery} className="img-greenery" />
        <div className="affirm-text-overlay">
          <p>{randomSaying}</p>
        </div>
      </div>
    )
}

export default Affirmation




