import FIMG from "../../../Asset/General/undraw_in_progress_re_m1l6.svg"
import SIMG from "../../../Asset/General/undraw_mobile_payments_re_7udl.svg"
import TIMG from "../../../Asset/General/undraw_online_banking_re_kwqh.svg"

function Direction() {
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center gap-3 p-14">
      <h2 className="font-bold text-lightBlue text-dxl md:text-3xl">
        How to transfer money in 3 easy steps
      </h2>
      <div className="flex flex-col pt-5 justify-center items-center gap-8 md:flex-row md:gap-14">
        <div className="w-[90%] md:w-[27%] h-80 px-8 flex flex-col justify-center items-center gap-3 rounded-md border-none scrolled">
          <div className="w-[70%] flex justify-center items-center">
            <img src={SIMG} alt="icon" />
          </div>
          <h3 className="font-semibold text-lightBlue text-xl">
            1. Create account
          </h3>
          <p>
            It takes just a few minutes, and all you need is an email address.
          </p>
        </div>
        <div className="w-[90%] md:w-[27%] h-80 px-8 flex flex-col justify-center items-center gap-3 rounded-md border-none scrolled">
          <div className="w-[70%] flex justify-center items-center">
            <img src={FIMG} alt="icon" />
          </div>
          <h3 className="font-semibold text-lightBlue text-xl">
            2. Enter details
          </h3>
          <p>
            Add recipient (you'll need their address, bank account/IBAN,
            swift/BIC) and payment information.
          </p>
        </div>
        <div className="w-[90%] md:w-[27%] h-80 px-8 flex flex-col justify-center items-center gap-3 rounded-md border-none scrolled">
          <div className="w-[70%] flex justify-center items-center">
            <img src={TIMG} alt="icon" />
          </div>
          <h3 className="font-semibold text-lightBlue text-xl">
            3. Confirm and send
          </h3>
          <p>
            Check the currencies and amount are correct, get the expected
            delivery date, and send your money transfer.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Direction