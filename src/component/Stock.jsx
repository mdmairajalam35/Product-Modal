export function Stock() {
  return (
    <>
      <div className="flex flex-row space-x-3 group">
        <div className="w-3 h-3 my-2  bg-green-500 rounded-full group-hover:animate-ping"></div>
        <div className="px-1 my-1 text-sm text-black">50+ pcs. in stock</div>
      </div>
    </>
  );
}
