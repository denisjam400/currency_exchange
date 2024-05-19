import SIMG from "../../../Asset/General/undraw_mobile_payments_re_7udl.svg";

const Tools = () => {
  return (
    <div className="bg-slate-100 w-screen h-full flex flex-col justify-center items-center gap-3 p-12">
      {" "}
      <h2 className="font-bold text-lightBlue text-dxl md:text-3xl">
        Xe Currency Tools
      </h2>
      <div className="flex flex-col pt-5 justify-center items-center gap-8 md:flex-row md:gap-14">
        <div className="w-[90%] md:w-[23%] h-72 px-8 flex flex-col justify-center items-center gap-3 rounded-md border-none scrolled">
          <div className="w-[70%] flex justify-center items-center">
            <img src={SIMG} alt="icon" />
          </div>
          <a href="/" className="font-semibold text-center text-lightBlue text-xl hover:underline">
           Historical Currency Rate
          </a>
        </div>
        <div className="w-[90%] md:w-[23%] h-72 px-8 flex flex-col justify-center items-center gap-3 rounded-md border-none scrolled">
          <div className="w-[70%] flex justify-center items-center">
            <img src={SIMG} alt="icon" />
          </div>
          <a href="/" className="font-semibold text-center text-lightBlue text-xl hover:underline">
           Travel Expense Calculator
          </a>
        </div>
        <div className="w-[90%] md:w-[23%] h-72 px-8 flex flex-col justify-center items-center gap-3 rounded-md border-none scrolled">
          <div className="w-[70%] flex justify-center items-center">
            <img src={SIMG} alt="icon" />
          </div>
          <a href="/" className="font-semibold text-center text-lightBlue text-xl hover:underline">
           Currency Email Update
          </a>
        </div>
      </div>
      <div className="mt-6"><button className="bg-darkBlue px-6 py-3 text-white rounded-md">More Tools</button></div>
    </div>
  );
};

export default Tools;
