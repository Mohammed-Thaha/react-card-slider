import data from "./Data/TeamData"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[320px] m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div
              key={index}
              className="bg-white h-[450px] text-black rounded-t-xl"
            >
              <div
                key={index}
                className={`h-56 rounded-b-xl flex justify-center items-center`}
                style={{ backgroundColor: `#${d.color}` }}
              >
                <img
                  src={d.image}
                  className="h-44 w-44 border-2 border-white rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4 text-center">
              <p className="text-4xl font-semibold" style={{ color: `#${d.color}` }}>{d.name}</p>
                <p className="text-lg  text-gray-600">{d.description}</p>
                <button
                  key={index}
                  className={`text-white text-lg px-6 py-1 rounded-xl`}
                  style={{ backgroundColor: `#${d.color}` }}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default App;
