import React from 'react';

function CheckBoxes({ register,...props },ref) {
  return (
    <div className='flex flex-col py-7'>
      <label className='text-gray-500 flex gap-x-2'>
        <input
          value={true}
          type="checkbox"
          {...register("agreeTerms",{value: "false"})}
          className='text-gray-500 p-2'
          {...props}
        />
        I agree to the Terms & Conditions
      </label>
      <label className='text-gray-500 flex gap-x-2'>
        <input
          type="checkbox"
          value={true}
          {...register("receiveEmails", {value: "false"})}
          {...props}
        />
        Yes, I want to receive promotional emails
      </label>
    </div>
  );
}

export default React.forwardRef(CheckBoxes);
