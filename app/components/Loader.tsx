const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Text Animation */}
        <p className="text-blue-500 text-xl font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
