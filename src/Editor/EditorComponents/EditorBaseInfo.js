import React from "react";

export default function EditorBaseInfo({
  baseData,
  errorbaseData,
  handlebaseInputChange,
})






{
  return (
    <>
      <div class="relative grid grid-cols-2 gap-10 z-0  mb-6 group">
        <div class="relative  z-0 lg:w-[250px] w-[150px] mb-6 group">
          <input
            onChange={handlebaseInputChange}
            onFocus={() => (errorbaseData.fullname = true)}
            type="text"
            value={baseData.fullname}
            name="fullname"
            id="floating_email"
            maxLength="35"
            autoComplete="off"
            class="block py-2.5 px-0 w-full text-sm text-yellow-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Full Name
          </label>

          {/* validatio start */}
          <label for="" class=" text-xs text-red-500">
            {errorbaseData.fullname === true
              ? baseData.fullname.length <= 2
                ? "enter at least 3 character"
                : null
                ? baseData.fullname.length > 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>
          {/* validatio end */}
        </div>
        <div class="relative z-0 lg:w-[250px] w-[150px] mb-6 group">
          <input
            onChange={handlebaseInputChange}
            autoComplete="off"
            onFocus={() => (errorbaseData.jobtitle = true)}
            maxLength="40"
            type="text"
            value={baseData.jobtitle}
            name="jobtitle"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-yellow-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Job Title
          </label>

          {/* validatio start */}
          <label for="" class=" text-xs text-red-500">
            {errorbaseData.jobtitle === true
              ? baseData.jobtitle.length <= 2
                ? "enter at least 3 character"
                : null
                ? baseData.jobtitle.length > 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>
          {/* validatio end */}
        </div>

        <div class="relative z-0 lg:w-[250px] w-[150px] mb-6 group">
          <input
            onChange={handlebaseInputChange}
            onFocus={() => (errorbaseData.city = true)}
            autoComplete="off"
            maxLength="15"
            value={baseData.city}
            type="text"
            name="city"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-yellow-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            City
          </label>

          {/* validatio start */}
          <label for="" class=" text-xs text-red-500">
            {errorbaseData.city === true
              ? baseData.city.length <= 2
                ? "enter at least 3 character"
                : null
                ? baseData.city.length > 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>

          {/* validatio end */}
        </div>

        <div class="relative z-0 lg:w-[250px] w-[150px] mb-6 group">
          <input
            onChange={handlebaseInputChange}
            onFocus={() => (errorbaseData.pincode = true)}
            maxLength="6"
            autoComplete="off"
            value={baseData.pincode}
            type="text"
            name="pincode"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-yellow-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Pincode
          </label>

          {/* validatio start */}

          <label for="" class=" text-xs text-red-500">
            {errorbaseData.pincode === true
              ? baseData.pincode.length <= 5
                ? "pincode should be 6 digit"
                : null
                ? baseData.pincode.length > 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>

          {/* validatio end */}
        </div>
        <div class="relative z-0 lg:w-[250px] w-[150px] mb-6 group">
          <input
            onChange={handlebaseInputChange}
            onFocus={() => (errorbaseData.email = true)}
            autoComplete="off"
            value={baseData.email}
            maxLength="35"
            type="email"
            name="email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-yellow-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email Id
          </label>

          {/* validatio start */}
          <label for="" class=" text-xs text-red-500">
            {errorbaseData.email === true
              ? !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                  baseData.email
                )
                ? "invalid Email !"
                : null
                ? baseData.email.length > 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>
          {/* validatio end */}
        </div>

        <div class="relative z-0 lg:w-[250px] w-[150px] mb-6 group">
          <input
            onChange={handlebaseInputChange}
            onFocus={() => (errorbaseData.phone = true)}
            autoComplete="off"
            max={6}
            value={baseData.phone}
            type="number"
            name="phone"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-yellow-500 font-bold bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number
          </label>

          {/* validatio start */}
          <label for="" class=" text-xs text-red-500">
            {errorbaseData.phone === true
              ? baseData.phone.length <= 9
                ? "phone should be 10 digit"
                : null
                ? baseData.phone.length > 3
                : <label  class=" text-xs text-green-500">valid 👌</label>
              : null}
          </label>
          {/* validatio end */}
        </div>
      </div>
    </>
  );
}
