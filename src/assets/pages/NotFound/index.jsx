

const NotFound = () => {
  return (
    <div>
      <div className="mt-32 text-center">
        <h1 className="mb-4 text-8xl font-semibold text-blue-500">404</h1>
        <p className="mb-8 text-lg text-gray-600">
          Oops! The page you are looking for could not be found.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </div>
        <p className="mt-4 text-gray-600">
          Go back to{" "}
          <a href="/" className="text-blue-500 hover:text-blue-800">
            Home
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
