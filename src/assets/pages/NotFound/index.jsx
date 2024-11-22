import { Link } from "react-router-dom"; // Impor Link
import Animate from "./Animate";
import Header from "./Header";

const NotFound = () => {
  return (
    <div>
      <div className="mt-32 text-center">
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
