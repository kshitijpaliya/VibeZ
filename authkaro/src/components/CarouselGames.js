// import React from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import "@splidejs/splide/dist/css/splide.min.css";

// import pic1 from "./static/krsnapic2.jpg";
// import pic2 from "./static/pic1.jpeg";
// import pic3 from "./static/concertpic1.jpg";
// import pic4 from "./static/concertpic2.jpg";
// import pic5 from "./static/danny-howe-bn-D2bCvpik-unsplash.jpg";

// // Define the style for the images in the carousel
// const imageStyle = {
//   width: "447px",
//   height: "664px",
//   borderRadius: "20px",
//   border: "1px solid #FFFFFF33",
// };

// function CarouselGames() {
//   return (
//     <div className="relative flex h-full bg-black">
//       <div className="container max-w-screen-xl mx-auto relative z-20 overflow-x-hidden">
//         <Splide
//           options={{
//             type: "loop", // Loop back to the beginning when reaching the end
//             autoScroll: {
//               pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
//               pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
//               rewind: true, // Rewind to start when the end is reached
//               speed: 1, // Scrolling speed
//             },
//             arrows: false, // Hide navigation arrows
//             pagination: false, // Hide pagination dots
//             fixedWidth: "445px", // Fixed width for each slide
//             gap: "12px", // Gap between slides
//           }}
//           extensions={{ AutoScroll }} // Use the AutoScroll extension
//         >
//           <SplideSlide>
//             <img src={pic1} alt="Poster Brooklyn" style={imageStyle} />
//           </SplideSlide>
//           <SplideSlide>
//             <img src={pic2} alt="Poster Macao" style={imageStyle} />
//           </SplideSlide>
//           <SplideSlide>
//             <img src={pic3} alt="Poster Navada" style={imageStyle} />
//           </SplideSlide>
//           <SplideSlide>
//             <img src={pic4} alt="Poster Brooklyn" style={imageStyle} />
//           </SplideSlide>
//           <SplideSlide>
//             <img src={pic5} alt="Poster Macao" style={imageStyle} />
//           </SplideSlide>
//           <SplideSlide>
//             <img src={pic1} alt="Poster Navada" style={imageStyle} />
//           </SplideSlide>
//         </Splide>
//       </div>
//     </div>
//   );
// }

// export default CarouselGames;
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

import pic1 from "./static/krsnapic2.jpg";
import pic2 from "./static/pic1.jpeg";
import pic3 from "./static/concertpic1.jpg";
import pic4 from "./static/concertpic2.jpg";
import pic5 from "./static/danny-howe-bn-D2bCvpik-unsplash.jpg";

function Carousel() {
  const imageStyle = {
    height: "300px", // Fixed height
    objectFit: "cover", // Ensures images are cropped to fit the height
    borderRadius: "15px", // Rounded edges for styling
    width: "100%", // Dynamically adjust width while maintaining aspect ratio
    alignSelf: "center", // Center the image within the slide
  };

  return (
    <Splide
      options={{
        type: "loop", // Loop back to the beginning when reaching the end
        autoScroll: {
          pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
          pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
          rewind: true, // Rewind to start when the end is reached
          speed: 1, // Scrolling speed
        },
        arrows: false, // Hide navigation arrows
        pagination: false, // Hide pagination dots
        fixedWidth: "100%", // Adjust the width of each slide to fit within the section
        gap: "12px", // Gap between slides
        borderRadius: "15px", // Rounded edges for styling
      }}
      extensions={{ AutoScroll }} // Use the AutoScroll extension
    >
      <SplideSlide>
        <img
          src={pic1}
          alt="Poster Brooklyn"
          className="rounded-lg w-full"
          style={imageStyle}
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={pic2}
          alt="Poster Macao"
          className="rounded-lg w-full"
          style={imageStyle}
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={pic3}
          alt="Poster Navada"
          className="rounded-lg w-full"
          style={imageStyle}
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={pic4}
          alt="Poster Brooklyn"
          className="rounded-lg w-full"
          style={imageStyle}
        />
      </SplideSlide>
      <SplideSlide>
        <img
          src={pic5}
          alt="Poster Macao"
          className="rounded-lg w-full"
          style={imageStyle}
        />
      </SplideSlide>
    </Splide>
  );
}

export default Carousel;
