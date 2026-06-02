
import {RiArrowRightSLine ,RiArrowLeftSLine } from "@remixicon/react";
const Pagination = ({Index,setIndex}) => {
  return (
    <div className=" flex gap-3 items-center justify-center">
        <button
          className={`${Index==1? "opacity-50":"opacity-100"} px-5 outline-1 outline-black bg-[#E9524D]  py-1 text-lg uppercase font-semibold rounded-xl `}
          onClick={() => {
            if (Index > 1) {
              setIndex(Index - 1);
            }
          }}
        >
          prev
        </button>
        <h1 className="text-lg flex items-center  font-bold"><RiArrowLeftSLine /> {Index} <RiArrowRightSLine /></h1>
        <button
          className="bg-[#25D366] outline-1 outline-black px-5 py-1 active:scale-95 text-lg uppercase font-semibold rounded-xl"
          onClick={() => {
            setIndex(Index + 1);
          }}
        >
          next
        </button>
      </div>
  )
}

export default Pagination
