
const Form = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-blue-700 mb-4 text-center">Contact Me</h1>
        <p className="text-gray-700 text-center mb-6">
          We use an agile approach to test assumptions and connect with the needs of your audience early and often.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600 text-sm mb-2" htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm mb-2" htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2" htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Phone Number"
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-2" htmlFor="message">Your Message</label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Leave a comment..."
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-gray-700 text-sm">
          <p><strong>Company Information:</strong> Thamborang LLC</p>
          <p>Tax ID: USXXXXXX</p>
          <p className="mt-2"><strong>Address:</strong></p>
          <p>SILVER LAKE, United States 98th Little Avenue</p>
          <p>Zip Code/Postal code: 03075</p>
          <p className="mt-2"><strong>Call us:</strong> +1 (646) 290-5060</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
