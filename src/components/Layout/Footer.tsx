export default function Footer() {
  return (
    <footer className="bg-black text-white w-full py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12 px-4 md:px-0">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Холбоо барих</h3>
          <p>HUD 15 хороо, ITC Tower, 5 давхар</p>
          <div className="flex flex-col gap-2 mt-2">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
            />
            <input
              type="tel"
              placeholder="Утас"
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
            />
            <button></button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Дугаар</h3>
          <p>+976 8500-3673</p>
          <p>+976 8090-6405</p>
          <p>Academy@erxes.io</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Main Links</h3>
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Projects
          </a>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between px-4 md:px-0 max-w-6xl mx-auto gap-4">
        <div className="flex gap-4 flex-col">
          <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">
            Facebook
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">
            Instagram
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">
            YouTube
          </button>
          <button className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">
            Twitter
          </button>
        </div>

        <div className="flex flex-col">
          <div className="text-9xl font-bold text-center md:text-right">
            ERXES
          </div>
          <div className="text-9xl font-bold text-center md:text-right">
            Academy
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-around m-2.5">
        <div className="flex flex-row gap-1">
          <div className="flex flex-row">
            <p>Designed by Pada-1-1</p>
          </div>
          <div className="">
            <p>Powered by Erxes</p>
          </div>
        </div>
        <div>
          <p>@{new Date().getFullYear()} Erxes rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
