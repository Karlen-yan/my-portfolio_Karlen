import React from 'react'

const SendExid = () => {
  return (
    <div
  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
  role="alert"
>
  <strong className="font-bold">Message sent!</strong>
  <span className="block sm:inline"> Your message has been successfully sent.</span>
  <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
    <svg
      className="fill-current h-6 w-6 text-green-500"
      role="button"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <title>Close</title>
      <path
        d="M14.348 5.652a1 1 0 010 1.414L9.414 10l4.934 4.934a1 1 0 11-1.414 1.414L8 11.414l-4.934 4.934a1 1 0 11-1.414-1.414L6.586 10 1.652 5.066a1 1 0 111.414-1.414L8 8.586l4.934-4.934a1 1 0 011.414 0z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  </span>
</div>
  )
}

export default SendExid
