export function Price() {
  return (
    <>
      <div className="Price flex flex-col mb-4 space-y-3 text-center md:text-left">
        <p className="line-through text-start">$799</p>
        <p className="text-5xl font-extrabold">$599</p>
        <p className="text-xs text-gray-400">
          This offer is valid until April 3rd or as long as stock lasts!
        </p>
      </div>
    </>
  );
}
