export function WishlistBtn() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center md:flex-row group w-full">
        <button className="flex flex-col  items-center w-full  transition-all duration-150  text-white border-t-8  rounded-lg group-hover:border-b-8 group-hover:border-t-0   group-hover:shadow-lg md:flex-row">
          <div>
            <span>
              <img
                className="w-10 h-10"
                src="https://tailwindfromscratch.com/mini-projects/product-modal/images/weight.png"
                alt=""
              />
            </span>
          </div>
          <div className="">Add to cart</div>
        </button>
        <button className="flex  items-center w-full transition-all duration-150  text-white border-t-8  rounded-lg group-hover:border-b-8 group-hover:border-t-0   group-hover:shadow-lg">
          <div>
            <span>
              <img
                className="w-10 h-10"
                src="https://tailwindfromscratch.com/mini-projects/product-modal/images/heart.png"
                alt=""
              />
            </span>
          </div>
          <div className="">Add to wishlist</div>
        </button>
      </div>
    </>
  );
}
