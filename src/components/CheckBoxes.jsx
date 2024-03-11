import React from 'react';

function CheckBoxes({ register,...props },ref) {
  return (
    <div className='flex flex-col py-7'>
      <label className='text-gray-500 flex gap-x-2'>
        <input
          type="checkbox"
          {...register("agreeTerms")}
          className='text-gray-500 p-2'
          {...props}
          ref={ref}
        />
        I agree to the Terms & Conditions
      </label>
      <label className='text-gray-500 flex gap-x-2'>
        <input
          type="checkbox"
          {...register("receiveEmails")}
          {...props}
          ref={ref}
        />
        Yes, I want to receive promotional emails
      </label>
    </div>
  );
}

export default React.forwardRef(CheckBoxes);
