import React from "react";
import InputTask from "./InputTask";

function DateSelector({...props},ref) {
  const date = new Date();
  const year = date.getFullYear();
  const month = (date.getMonth()+1) > 9 ? (date.getMonth()+1) : `0${date.getMonth()+1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const currdate = `${year}-${month}-${day}`;
  return (
    <>
     <InputTask
        label={"Date"}
        type={"date"}
        defaultValue={currdate}
        {...props}
        ref={ref}
      />
    </>
  );
}

export default React.forwardRef(DateSelector);
