
import Button from "./Button";

export default function HeroText(){
    return(
        <>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h1
          
            className="md:text-5xl text-3xl font-extrabold text-transparent capitalize bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text"
          >
           Haris Packages
          </h1>

          <p
           
            className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0"
          >
            Manufacturer & Importer of Plastic Products.
          </p>

          <div
         
            className="mt-6 flex justify-center md:justify-start"
          >
            <Button />
          </div>
        </div>
        </>
    )
}
// import Button from "./Button";

// export default function HeroText() {
//   return (
//     <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
//       {/* h1: instant paint, smooth fade+slide */}
//       <h1
//         className="md:text-5xl text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text
//                    opacity-0 translate-y-10 animate-fade-slide"
//       >
//         MSE PLASTIC INDUSTRIES
//       </h1>

//       <p
//         className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0
//                    opacity-0 translate-y-5 animate-fade-slide delay-150"
//       >
//         Manufacturer & Importer of Plastic Products.
//       </p>

//       <div
//         className="mt-6 flex justify-center md:justify-start
//                    opacity-0 translate-y-5 animate-fade-slide delay-300"
//       >
//         <Button />
//       </div>
//     </div>
//   );
// }
