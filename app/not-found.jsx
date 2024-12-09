import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-full w-full bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-sky-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page not found
        </p>
        <p className="text-gray-600 mt-2">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="px-6 py-2 text-white bg-sky-600 hover:bg-sky-700 rounded-md transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
