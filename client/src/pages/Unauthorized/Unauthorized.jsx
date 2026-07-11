import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-bold text-red-600">403</h1>

      <h2 className="mt-4 text-2xl font-semibold">
        Access Denied
      </h2>

      <p className="mt-2 text-gray-600">
        You don't have permission to access this page.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Unauthorized;