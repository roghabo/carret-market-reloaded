export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none ring ring-transparent transition-shadow has-[:invalid]:ring-red-100">
        <input
          className="w-full rounded-full h-12 pl-5 bg-gray-200 ring ring-transparent focus:ring-blue-500 focus:ring-offset-2 transition-shadow invalid:focus:ring-red-500 peer"
          type="text"
          required
          placeholder="Search here..."
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required
        </span>
        <button className=" text-white py-2 rounded-full active:scale-90 transition font-medium md:px-10 bg-gradient-to-tr from-cyan-500 via-yellow-400 to-purple-400 peer-invalid:from-red-500 peer-invalid:to-red-500">
          Search
        </button>
      </div>
    </main>
  );
}
