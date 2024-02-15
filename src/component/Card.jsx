import { Price } from "./Price";
import { Stock } from "./Stock";


function Card() {
  return (
    <>
      <div className="flex flex-col p-6 m-3 max-w-fit justify-center space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">

        {/* image */}
        <div>
          <img
            src="https://tailwindfromscratch.com/mini-projects/product-modal/images/headphone.png"
            alt="product-image"
            className="w-60 mx-auto transform  md:hover:scale-105 duration-200"
          />
        </div>
        <div className="flex flex-col justify-center items-start space-x-6 md:text-left ">

          {/* Header */}
          <div className=" flex flex-col text-left md:space-x-6">
            <h6 className="bg-black text-white  text-sm  max-w-fit py-1 px-2  rounded-full md:py-1 md:px-3 md:mx-6">
              Free Shipping
            </h6>
            <h1 className="text-black max-w-sm text-2xl text-wrap">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </h1>
          </div>

          {/* Price */}
          <Price/>

          {/* Add Button */}
          
            <div className="group w-full flex flex-col justify-center min-w-fit ">
              <button className="w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg">
                <div className="px-8 py-4 duration-150 bg-blue-500 rounded-lg group-hover:bg-blue-700">
                  Add to cart
                </div>
              </button>
            </div>

          {/* Stock */}
          <Stock/>

          {/* Cart and Wishlit */}
        </div>
      </div>
      ;
    </>
  );
}


export default Card;