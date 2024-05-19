import { useState } from "react";
import { AiOutlineBarChart, AiOutlineAlert } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { Newz_C } from "../../../Json/text";
import IMG from "../../../Asset/model/pexels-juan-mendez-1536619.jpg";

const David = () => {
  const [convertX, setConvertX] = useState("convert");

  const convCon = (contentTag) => {
    setConvertX(contentTag);
  };

  return (
    <div className="w-screen flex justify-center items-center mt-7">
      <div className="w-[90%] h-[60vh] lg:h-[360px] flex flex-col bg-white text-black rounded-xl">
        <div className="h-[13%] w-full flex justify-between items-start rounded-xl">
          <div
            onClick={() => convCon("convert")}
            className="flex-1 w-[33%] text-center bg-slate-100 py-2 text-lg font-normal flex justify-center items-center gap-2 rounded-tl-xl"
          >
            <span>
              <BsCurrencyExchange />
            </span>
            Convert
          </div>
          <div
            onClick={() => convCon("chart")}
            className="flex-1 w-[34%] text-center bg-slate-100 py-2 text-lg font-normal flex justify-center items-center gap-2"
          >
            <span>
              <AiOutlineBarChart />
            </span>
            Chart
          </div>
          <div
            onClick={() => convCon("alert")}
            className="flex-1 w-[33%] text-center bg-slate-100 py-2 text-lg font-normal flex justify-center items-center gap-2 rounded-tr-xl"
          >
            <span>
              <AiOutlineAlert />
            </span>
            Alert
          </div>
        </div>

        <div className="w-full h-[87%]">
          {convertX === "convert" && (
            <div className="bg-red-500 w-full h-full"></div>
          )}
          {convertX === "chart" && (
            <div className="bg-blue-500 w-full h-full"></div>
          )}
          {convertX === "alert" && (
            <div className="px-2 bg-gray-300 w-full h-full flex flex-wrap justify-center items-center gap-3">
              {Newz_C.map((newz) => (
                <div
                  key={newz.id}
                  className={`w-[32%] h-[20%] flex justify-start gap-3 bg-white rounded-full`}
                >
                  <div className="w-[17%] h-full rounded-full flex justify-center items-center">
                    <img
                      src={IMG}
                      alt="newz_image"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="w-[80%] h-full flex flex-col gap-0">
                    <h3 className="w-[90%] h-[34%] capitalize text-blue-600 flex justify-between items-end">
                      {newz.CurrencyName}
                      <span className="text-blue-800 text-[10px]">
                        {newz.Nation_TAG}
                      </span>
                    </h3>
                    <h5 className="w-[94%] h-[63%] capitalize text-blue-700 text-sm">
                      {newz.HeadLine}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default David;
