import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import paymentIMG from "../../../Asset/General/payments.png" 

const Footer = () => {
  return (
    <footer className="w-screen flex flex-col justify-center items-center gap-0">
      <div className="bg-slate-200 px-4 py-8 flex flex-col justify-center items-start gap-9 md:flex-row md:justify-between md:gap-0 md:p-14">
        <div className="md:w-[27%]">
          <h2 className="pb-4 text-darkBlue font-bold text-2xl">
            GET IN TOUCH
          </h2>
          <p>
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor. Rebum tempor no vero est magna amet no
          </p>
          <address className="ml-6 pt-4">
            <h4>Address: 123 Street, New York, USA</h4>
            <h4>Gmail: MarketTrend@gmail.com</h4>
            <h4>Contact: +012 345 67890</h4>
          </address>
        </div>
        <div className="md:w-[20%]">
          <h2 className="pb-4 text-darkBlue font-semibold text-2xl">Tools</h2>
          <nav className="ml-2 pt-0 md:pt-1">
            <ul>
              <a href="/">Historical Currency Rate</a>
            </ul>
            <ul>
              <a href="/">Travel Expense Calculator</a>
            </ul>
            <ul>
              <a href="/">Travel Expense Calculator</a>
            </ul>
          </nav>
        </div>
        <div className="md:w-[15%]">
          <h2 className="pb-4 text-darkBlue font-semibold text-2xl">
            language
          </h2>
          <select>
            <option>English</option>
          </select>
        </div>
        <div className="md:w-[30%] flex flex-col">
          <h2 className="pb-4 text-darkBlue font-semibold text-2xl capitalize">
            NewsLetter
          </h2>
          <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
          <form className="flex justify-start items-center gap-0 py-3">
            <input
              className="outline-none border-none py-1 px-3"
              type="email"
              name="email"
            />
            <button className="py-1 px-4 bg-darkBlue text-white" type="submit">
              Sign Up
            </button>
          </form>
          <div>
            <h2 className="py-1 font-Centra">FOLLOW US</h2>
            <div className="flex justify-start items-center gap-1 text-white pt-2">
              <div className="p-2 bg-darkBlue">
                <BsFacebook />
              </div>
              <div className="p-2 bg-darkBlue">
                <BsTwitter />
              </div>
              <div className="p-2 bg-darkBlue">
                <BsLinkedin />
              </div>
              <div className="p-2 bg-darkBlue">
                <BsInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 w-screen bg-darkBlue flex flex-col justify-between items-center gap-2 text-white md:flex-row md:gap-0 md:px-14">
        <div>
          &copy;{" "}
          <a href="/" className="text-lightBlue">
            MarketTrend.
          </a>
          <span> All right reserved. Designed by</span>
          <span className="text-lightBlue"> Derex</span>
        </div>
        <div>
          <img src={paymentIMG} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
