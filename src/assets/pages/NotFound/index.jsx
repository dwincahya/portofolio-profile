import { Link } from "react-router-dom"; 
import Animate from "./Animate";
import Header from "./Header";

const NotFound = () => {
  return (
    <div>
      <div className="my-10 md:my-12 lg:my-14 xl:my-16 2xl:my-28 text-center">
        <Header />
        <Animate />
        <p className="mt-4 text-gray-600">
          Go back to{" "}
          <Link to="/" className="text-blue-500 hover:text-blue-800">
            Home
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFound;
