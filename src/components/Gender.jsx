import React from "react";

function Gender({ onChange,...props },ref) {

  return (
    <div className="flex">
      <div className="relative flex flex-col rounded-xl bg-clip-border text-gray-700 ">
        <p className="block font-sans text-base antialiased text-left ms-4 leading-relaxed text-blue-gray-400 px-2">
          Gender
        </p>
        <nav className="flex flex-row font-sans text-sm font-normal text-blue-gray-700">
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-50 hover:bg-opacity-80 hover:text-gray-900 focus:bg-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-gray-50 active:bg-opacity-80 active:text-gray-900"
          >
            <label
              htmlFor="gender-male"
              className="flex items-center w-full p-2 cursor-pointer"
            >
              <div className="grid mr-3 place-items-center">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-0 rounded-full cursor-pointer"
                    htmlFor="gender-male"
                  >
                    <input
                      name="gender"
                      id="gender-male"
                      type="radio"
                      value="male"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-700 checked:before:bg-blue-700 hover:before:opacity-0"
                      {...props}
                      ref={ref}
                      onChange={onChange}
                    />
                    <span className="absolute text-sm text-blue-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p className="block font-sans text-base antialiased  leading-relaxed text-blue-gray-400">
                Male
              </p>
            </label>
          </div>
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
          >
            <label
              htmlFor="gender-female"
              className="flex items-center w-full px-3 py-2 cursor-pointer"
            >
              <div className="grid mr-3 place-items-center">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-0 rounded-full cursor-pointer"
                    htmlFor="gender-female"
                  >
                    <input
                      name="gender"
                      id="gender-female"
                      type="radio"
                      value="female"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-700 checked:before:bg-blue-700 hover:before:opacity-0"
                      {...props}
                      ref={ref}

                      onChange={onChange}
                    />
                    <span className="absolute text-sm text-blue-700 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <circle
                          data-name="ellipse"
                          cx="8"
                          cy="8"
                          r="8"
                        ></circle>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p className="block font-sans text-base antialiased leading-relaxed text-blue-gray-400">
                Female
              </p>
            </label>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default React.forwardRef(Gender);
