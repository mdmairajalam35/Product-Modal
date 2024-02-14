import "./App.css";
import BtnADD from "./component/BtnADD";
import { HeaderSec } from "./component/Header";
import Image from "./component/Image";
import { Price } from "./component/Price";
import { Stock } from "./component/Stock";
import "./input.css";

function App() {
  return (
    <>
      {/* Galobal Background */}
      <div className="bg-slate-800 h-screen w-screen flex justify-center items-center font-serif">
        {/* Card */}
        <div className="flex flex-col p-6 m-3 justify-center space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
          {/* image */}
          <Image />
          <div className="flex flex-col justify-center items-start space-x-6 md:text-left ">
            {/* Header */}
            <HeaderSec />
            {/* Price */}
            <Price />

            {/* Add Button */}
            <div>
              <BtnADD />
            </div>

            {/* Stock */}
            <Stock />

            {/* Cart and Wishlit */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
