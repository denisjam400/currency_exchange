import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Listbox, Transition } from "@headlessui/react";
import { AiOutlineBarChart, AiOutlineAlert } from "react-icons/ai";
import { CiCircleChevDown } from "react-icons/ci";
import { BsFillPatchCheckFill, BsCurrencyExchange } from "react-icons/bs";
import { CiWarning } from "react-icons/ci";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
const CountryListURL = "https://restcountries.com/v3.1/all";
const API_KEY = "rXVgMxqixrVidJvwq8IWQducvghBrXQ3";

const people = [
  {
    id: 1,
    name: "Wade Cooper",
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Arlene Mccoy",
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Devon Webb",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Tom Cook",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Tanya Fox",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 6,
    name: "Hellen Schmidt",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 7,
    name: "Caroline Schultz",
    avatar:
      "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 8,
    name: "Mason Heaney",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 9,
    name: "Claudie Smitham",
    avatar:
      "https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 10,
    name: "Emil Schaefer",
    avatar:
      "https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Body = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedOne, setSelectedOne] = useState(people[3]);
  const [selectedTwo, setSelectedTwo] = useState(people[5]);
  const [amount, setAmount] = useState("");
  const [exchange, setExchange] = useState({});
  const [allList, setAllList] = useState([]);

  async function currencyMapper() {
    const kind = await axios({
      method: "GET",
      headers: { "Content-Type": "	application/json" },
      url: `https://api.apilayer.com/fixer/symbols?apikey=${API_KEY}`,
    });
    try {
      return kind.data.symbols;
    } catch (e) {
      console.log("unfetched", e);
    }
  }

  async function CountriesList() {
    try {
      const CountriesLink = await axios.get(CountryListURL);
      const Countries = await CountriesLink.data;
      return Countries;
    } catch (err) {
      console.log("Not-Found", err);
    }
  }

  async function mainMapper() {
    const currencyData = await currencyMapper();
    const countriesList = await CountriesList();

    let countriesWithFlags = currencyData.map((obj) => {
      let countryFlag = countriesList.find(
        (country) => country.currencies[0].cca3 === obj
      );
      if (!countryFlag)
        return {
          ...obj,
          flag: "kil",
        };
      return { ...obj, flag: countryFlag.flags.png };
    });
    console.log(countriesWithFlags);
  }

  useEffect(() => {
    mainMapper();
  }, []);

  return (
    <div>
      <div className="py-5 flex flex-col bg-red-800 text-white headerImage">
        <div className="flex flex-col justify-center items-center">
          <h1 className="w-[90%] md:w-screen font-bold text-center text-3xl md:font-extrabold md:text-4xl">
            The World's Trusted Currency Authority
          </h1>
          <p className="w-[90%] md:w-screen text-center font-normal text-md md:font-medium md:text-lg">
            Check exchange rates, send money internationally, and free currency
            tools
          </p>
        </div>
        <div className="w-screen flex justify-center items-center mt-7">
          {" "}
          <div className="w-[90%] h-max lg:h-[360px] bg-white text-black rounded-xl">
            <div className="h-[13%] w-[100%] flex justify-between items-start rounded-xl">
              <div
                id="convert"
                className="flex-1 w-[33%] text-center bg-slate-100 py-2 text-lg font-normal flex justify-center items-center gap-2 rounded-tl-xl"
              >
                <span>
                  <BsCurrencyExchange />
                </span>
                Convert
              </div>
              <div
                id="chart"
                className="flex-1 w-[34%] text-center bg-slate-100 py-2 text-lg font-normal flex justify-center items-center gap-2"
              >
                <span>
                  <AiOutlineBarChart />
                </span>
                Chart
              </div>
              <div
                id="alert"
                className="flex-1 w-[33%] text-center bg-slate-100 py-2 text-lg font-normal flex justify-center items-center gap-2 rounded-tr-xl"
              >
                <span>
                  <AiOutlineAlert />
                </span>
                Alert
              </div>
            </div>
            <div className="h-[87%]  w-[100%] flex justify-center items-center">
              <div className="w-[100%] flex justify-center items-center">
                <form
                  action=""
                  className="w-[100%] flex flex-col justify-center items-center"
                >
                  <div className="w-[90%] flex flex-col justify-center items-center gap-4 md:flex-row">
                    <div className="flex-1 w-[100%]">
                      {" "}
                      <label className="text-xl font-bold">Amount:</label>
                      <div className="relative mt-2 rounded-md shadow-sm h-[55px]">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          {/* make dis currency dynamic */}
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="amount"
                          className="h-[55px] block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div className="flex-1 w-[100%]">
                      <Listbox value={selectedOne} onChange={setSelectedOne}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block text-xl font-bold leading-6 text-gray-900">
                              From:
                            </Listbox.Label>

                            <div className="relative mt-2">
                              <Listbox.Button className="relative w-full h-[55px] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                  <img
                                    src={selectedOne.avatar}
                                    alt=""
                                    className="h-5 w-5 flex-shrink-0 rounded-full"
                                  />
                                  <span className="ml-3 block truncate">
                                    {selectedOne.name}
                                  </span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                  <CiCircleChevDown
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {people.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-indigo-600 text-white"
                                            : "text-gray-900",
                                          "relative cursor-default select-none py-2 pl-3 pr-9"
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <div className="flex items-center w-full h-[40px]">
                                            <img
                                              src={person.avatar}
                                              alt=""
                                              className="h-5 w-5 flex-shrink-0 rounded-full"
                                            />
                                            <span
                                              className={classNames(
                                                selected
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "ml-3 block truncate"
                                              )}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? "text-white"
                                                  : "text-indigo-600",
                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                              )}
                                            >
                                              <BsFillPatchCheckFill
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                    <div className="flex justify-center items-center border-2 border-blue-100 rounded-full p-4 cursor-pointer hover:border-green-300">
                      <HiOutlineSwitchHorizontal />
                    </div>
                    <div className="flex-1 w-[100%]">
                      <Listbox value={selectedTwo} onChange={setSelectedTwo}>
                        {({ open }) => (
                          <>
                            <Listbox.Label className="block text-xl font-bold leading-6 text-gray-900">
                              To:
                            </Listbox.Label>
                            <div className="relative mt-2">
                              <Listbox.Button className="relative w-full h-[55px] cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                  <img
                                    src={selectedTwo.avatar}
                                    alt=""
                                    className="h-5 w-5 flex-shrink-0 rounded-full"
                                  />
                                  <span className="ml-3 block truncate">
                                    {selectedTwo.name}
                                  </span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                  <CiCircleChevDown
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                </span>
                              </Listbox.Button>

                              <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                  {people.map((person) => (
                                    <Listbox.Option
                                      key={person.id}
                                      className={({ active }) =>
                                        classNames(
                                          active
                                            ? "bg-indigo-600 text-white"
                                            : "text-gray-900",
                                          "relative cursor-default select-none py-2 pl-3 pr-9"
                                        )
                                      }
                                      value={person}
                                    >
                                      {({ selected, active }) => (
                                        <>
                                          <div className="flex items-center w-full h-[40px]">
                                            <img
                                              src={person.avatar}
                                              alt=""
                                              className="h-5 w-5 flex-shrink-0 rounded-full"
                                            />
                                            <span
                                              className={classNames(
                                                selected
                                                  ? "font-semibold"
                                                  : "font-normal",
                                                "ml-3 block truncate"
                                              )}
                                            >
                                              {person.name}
                                            </span>
                                          </div>

                                          {selected ? (
                                            <span
                                              className={classNames(
                                                active
                                                  ? "text-white"
                                                  : "text-indigo-600",
                                                "absolute inset-y-0 right-0 flex items-center pr-4"
                                              )}
                                            >
                                              <BsFillPatchCheckFill
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                              />
                                            </span>
                                          ) : null}
                                        </>
                                      )}
                                    </Listbox.Option>
                                  ))}
                                </Listbox.Options>
                              </Transition>
                            </div>
                          </>
                        )}
                      </Listbox>
                    </div>
                  </div>
                  <div className="w-[90%] my-5 flex justify-between items-center">
                    <div className="px-2 py-1 flex justify-center items-center gap-3 bg-blue-100 w-[50%] rounded-lg">
                      <CiWarning className="text-3xl" />
                      <div className="text-[#242222] text-xs font-medium">
                        <h4>
                          We use the mid-market rate for our Converter. This is
                          for informational purposes only. You won’t receive
                          this rate when sending money.
                          <a href="/" className="text-blue-900 pl-2">
                            Check send rates
                          </a>
                        </h4>
                      </div>
                    </div>
                    <button className="border-none rounded-xl bg-blue-600 text-white outline-none px-5 py-2 text-xl">
                      Convert
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
