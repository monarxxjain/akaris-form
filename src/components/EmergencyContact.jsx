import React from "react";
import InputTask from "./InputTask";

function EmergencyContact({ register, errors },ref) {
  return (
    <div>
      <p className="text-ls p-2 font-semibold text-gray-500">
        Emergency contact information
      </p>
      <div className="flex gap-4 flex-wrap">
        <div className="flex gap-4 flex-wrap">
          <InputTask
            label="First Name*"
            {...register("emergencyFirstName", { required: "First Name is required" })}
            error={errors.emergencyFirstName && errors.emergencyFirstName.message}
            ref={ref}
          />
          <InputTask
            label="Last Name*"
            {...register("emergencyLastName", { required: "Last Name is required" })}
            error={errors.emergencyLastName && errors.emergencyLastName.message}
            ref={ref}
          />
        </div>
        <div className="flex gap-4 flex-wrap">
          <InputTask
            label="Email Address*"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
            ref={ref}
            error={errors.emergencyEmail && errors.emergencyEmail.message}
          />
          <InputTask
            label="Phone Number*"
            {...register("emergencyPhone", { required: "Phone Number is required" })}
            error={errors.emergencyPhone && errors.emergencyPhone.message}
            ref={ref}
          />
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(EmergencyContact);
