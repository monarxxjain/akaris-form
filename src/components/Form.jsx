import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputTask from "./InputTask";
import Gender from "./Gender";
import DateSelector from "./DateSelector";
import Title from "./Title";
import CountryInitials from "./CountryInitials";
import EmergencyContact from "./EmergencyContact";
import BagInfo from "./BagInfo";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [count, setCount] = useState(0);

  const onSubmit = (data) => {
    console.log("userDatacode",data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-24">
        <p className="text-xl p-2 font-semibold text-gray-500">Passenger 1</p>
        <p className="text-sm px-1 py-2 text-zinc-500 font-medium">
          Passenger Details
        </p>
        <div className="flex gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <Title {...register("title" ,{required: "Title is required"})} />
            <InputTask
              label="First Name*"
              {...register("firstName", { required: "First Name is required" })}
              error={errors.firstName && errors.firstName.message}
            />
            <InputTask 
              label="Middle Name" 
              {...register("middleName")} 
            />
            <InputTask
              label="Last Name*"
              {...register("lastName", { required: "Last Name is required" })}
              error={errors.lastName && errors.lastName.message}
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <InputTask
              label="Suffix"
              {...register("suffix")}
              error={errors.suffix && errors.suffix.message}
            />
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
              error={errors.email && errors.email.message}
            />
            <DateSelector
              label="Date of Birth (MM/DD/YY)*"
              {...register("dob", { required: "Date of Birth is required" })}
              error={errors.dob && errors.dob.message}
            />
            <Gender 
              register={register}
              errors={errors}
            />
          </div>
        </div>
        <p className="text-sm px-1 pb-2 text-zinc-500 font-medium">
          Travelling Details
        </p>
        <div className="flex gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <CountryInitials
              {...register("countryInitials", { required: "Country of Issue is required" })}
              error={errors.countryOfIssue && errors.countryOfIssue.message}
            />
            <InputTask
              label="Phone Number*"
              type="text"
              {...register("phoneNumber", { required: "Phone Number is required" })}
              error={errors.passportNumber && errors.passportNumber.message}
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <InputTask
              label="Redress Number"
              type="text"
              {...register("redressNumber")}
            />
            <InputTask
              label="Known traveller Number"
              type="tel"
              {...register("knownTravellerNumber")}
            />
          </div>
        </div>
        <p className="text-sm px-1 pt-2 text-zinc-500 font-medium">
          Travel Documents
        </p>
        <div className="flex gap-4 flex-wrap">
        <CountryInitials
              {...register("countryOfIssue", { required: "Country of Issue is required" })}
              error={errors.countryOfIssue && errors.countryOfIssue.message}
            />
          <InputTask
            label="Passport Number*"
            type="text"
            {...register("passportNumber", { required: "Passport Number is required" })}
            error={errors.passportNumber && errors.passportNumber.message}
          />
          <DateSelector
            label="Passport Expiry*"
            {...register("passportExpiry", { required: "Passport Expiry Date is required" })}
            error={errors.passportExpiry && errors.passportExpiry.message}
          />
        </div>
        <EmergencyContact 
          register={register}
          errors={errors}
          />
        <BagInfo
          count={count}
          setCount={setCount}
          register={register}
          errors={errors}
        />
        <button
          type="submit"
          className="text-blue-500 border-blue-500 border-2 hover:text-white hover:bg-blue-500 transition-transform ease-in-out font-bold py-2 px-4 rounded mt-4"
        >
          Save and close
        </button>
        <p>{errors.message}</p>
      </div>
    </form>
  );
};

export default Form;
