import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputTask from "./InputTask";
import Gender from "./Gender";
import DateSelector from "./DateSelector";
import Title from "./Title";
import CountryInitials from "./CountryInitials";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data gotit");
    console.log("userDatacode", data);
  };

  const handleCancel = () => {
    console.log("cancel");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-24">
        <p className="text-xl p-2 font-semibold text-gray-500">Passenger 1</p>
        <p className="text-sm px-1 py-2 text-zinc-500 font-medium">
          Passenger Details
        </p>
        <div className="flex gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <Title {...register("title", { required: "Title is required" })} />
            <div className="flex flex-col">
              <InputTask
                label="First Name*"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                error={
                  errors.firstName &&
                  (errors.firstName.message = "First Name is required")
                }
              />
              <p className="text-red-500 text-xs px-1">
                {errors.firstName?.message}
              </p>
            </div>
            <InputTask label="Middle Name" {...register("middleName")} />
            <div className="flex flex-col">
              <InputTask
                label="Last Name*"
                {...register("lastName", { required: "Last Name is required" })}
                error={
                  errors.lastName &&
                  (errors.lastName.message = "Last Name is required")
                }
              />
              <p className="text-red-500 text-xs px-1">
                {errors.lastName?.message}
              </p>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            <InputTask
              label="Suffix"
              {...register("suffix")}
              error={errors.suffix && errors.suffix.message}
            />
            <div className="flex flex-col">
              <InputTask
                label="Email Address*"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
                error={
                  errors.email &&
                  (errors.email.message = "Email address is required")
                }
              />
              <p className="text-red-500 text-xs px-1">
                {errors.email?.message}
              </p>
            </div>
            <div className="flex flex-col">
              <DateSelector
                label="Date of Birth (MM/DD/YY)*"
                {...register("dob", { required: "Date of Birth is required" })}
                error={
                  errors.dob &&
                  (errors.dob.message = "Date of Birth is required")
                }
              />
              <p className="text-red-500 text-xs px-1">{errors.dob?.message}</p>
            </div>
            <Gender register={register} errors={errors} />
          </div>
        </div>
        <p className="text-sm px-1 pb-2 text-zinc-500 font-medium">
          Travelling Details
        </p>
        <div className="flex gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <CountryInitials
              {...register("countryInitials", {
                required: "Country of Issue is required",
              })}
              error={errors.countryOfIssue && errors.countryOfIssue.message}
            />
            <div className="flex flex-col">
              <InputTask
                label="Phone Number*"
                type="number"
                className="decoration-transparent"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[0-9]+$/,
                    message:
                      "Please enter a valid phone number with numbers only",
                  },
                })}
                error={
                  errors.phoneNumber &&
                  (errors.phoneNumber.message = "Phone Number is required")
                }
              />

              <p className="text-red-500 text-xs px-1">
                {errors.phoneNumber?.message}
              </p>
            </div>
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
            {...register("countryOfIssue", {
              required: "Country of Issue is required",
            })}
            error={errors.countryOfIssue && errors.countryOfIssue.message}
          />
          <div className="flex flex-col">
            <InputTask
              label="Passport Number*"
              type="text"
              {...register("passportNumber", {
                required: "Passport Number is required",
              })}
              error={
                errors.passportNumber &&
                (errors.passportNumber.message = "Passport Number is required")
              }
            />
            <p className="text-red-500 text-xs px-1">
              {errors.passportNumber?.message}
            </p>
          </div>
          <DateSelector
            label="Passport Expiry*"
            {...register("passportExpiry", {
              required: "Passport Expiry Date is required",
            })}
            error={
              errors.passportExpiry &&
              (errors.passportExpiry.message =
                "Passport Expiry Date is required")
            }
          />
        </div>
        <div>
        <button
          type="submit"
          className="text-blue-500 border-blue-500 border-2 hover:text-white hover:bg-blue-500 transition-transform ease-in-out font-bold py-2 px-4 rounded mt-4"
        >
          Save and close
        </button>
        <button className="border-red-600 border-2 py-2 px-4 rounded-md mx-8" onClick={handleCancel}>Cancel</button>
        </div>
        <p>{errors.message}</p>
      </div>
    </form>
  );
};

export default Form;
