import { BsStar, BsStarFill } from "react-icons/bs";

const Recommended = () => {
  return (
    <div className="bg-darkBlue w-screen h-full flex flex-col justify-center items-center gap-3 p-5 text-white">
      {" "}
      <h2 className="font-bold text-xl md:text-2xl">
        Recommended by 55,000+ verified customers
      </h2>
      <div className="h-60 w-[85%] md:w-[25%] flex flex-col justify-center items-center rounded-xl transBG">
        <h2 className="font-bold text-lg pb-2">'Great'</h2>
        <div className="flex justify-center items-center gap-1">
          <div className="p-2 bg-green-400">
            <BsStarFill />
          </div>
          <div className="p-2 bg-green-400">
            <BsStarFill />
          </div>
          <div className="p-2 bg-green-400">
            <BsStarFill />
          </div>
          <div className="p-2 bg-green-400">
            <BsStarFill />
          </div>
          <div className="p-2 bg-green-400">
            <BsStarFill />
          </div>
        </div>
        <h2 className="pt-2 pb-3">
          Based on <a href="/" className="underline cursor-pointer">0 reviews</a>
        </h2>
        <div className="flex justify-center items-center gap-2 text-2xl">
          <BsStarFill className="text-green-400 text-3xl" /> TrustPilot
        </div>
      </div>
    </div>
  );
}

export default Recommended