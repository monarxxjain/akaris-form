import React, { useState } from "react";
import CheckBoxes from "./CheckBoxes";

function BagInfo({ register},ref) {
  const [count, setCount] = useState(0);

  return (
    <div className="md:max-w-[700px]">
      <p className="text-xl p-2 font-semibold text-gray-500 pt-16">Bag information</p>
      <p className="text-gray-500 p-2 pb-12 ">
        Each passenger is allowed one free carry-on bag and one personal item.
        First checked bag for each passenger is also free. Second bag check fees
        are waived for loyalty program members.{" "}
        <span className="text-blue-700 cursor-pointer">
          See the full bag policy.
        </span>
      </p>
      <div className=" flex justify-between">
        <div>
          <p className="text-xl p-2 font-semibold text-gray-500">
            Bag Count
          </p>
          <p className="text-gray-500 p-2 ">
            {/* Display the bag count */}
            {count}
          </p>
        </div>
        <div>
          <p className="text-xl p-2 font-semibold text-gray-500">
            Adjust Bag Count
          </p>
          <div className="flex">
            <button
              className="text-2xl text-gray-500 "
              onClick={() => count > 0 ? setCount(prevCount => prevCount - 1) : null}
            >
              -
            </button>
            <p className="text-gray-500 p-2 text-xl ">{count}</p>
            <button
              className="text-2xl text-gray-500 "
              onClick={() => setCount(prevCount => prevCount + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      {/* Include hidden input field to store bag count in form data */}
      <input
        type="hidden"
        {...register("bagCount", { value: count })}
        ref={ref}
      />
      <CheckBoxes 
        register={register}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(BagInfo);
