import React from "react";
import CheckBoxes from "./CheckBoxes";
import InputTask from "./InputTask";

function BagInfo({ register},ref) {


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
            Enter the Number of Bags in total
          </p>
        </div>
        <div>
          <p className="text-xl p-2 font-semibold text-gray-500">
            Adjust Bag Count
          </p>
          <div className="flex">
            <InputTask 
              type="number"
              label="Bag Count"
              {...register("bagCount")}
            />
          </div>
        </div>
      </div>
      <CheckBoxes 
        register={register}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(BagInfo);
