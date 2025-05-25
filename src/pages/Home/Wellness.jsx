import { IoIosArrowForward } from "react-icons/io"

function Wellness() {
  return (
    <div>
      <section className="h-screen bg-white flex flex-col justify-center items-center text-center px-4">
        <div className="mb-8 animate-bounce">
          <div className="border border-gray-400 rounded w-10 h-10 flex items-center justify-center">
            <span className="text-xl font-serif">I</span>
          </div>
        </div>

        <h2 className="text-gray-700 text-2xl md:text-3xl font-serif font-medium max-w-3xl leading-relaxed">
          The stay at <span className="font-semibold">Wellness & pool Hotel RoyalPhoenicia</span>{' '}
          means enjoying every moment.<br />
          Relax. Find inspiration. Be fascinated.
        </h2>
        <div className="group relative mt-10">
          <button className="px-6 py-2 bg-light border border-gray-500 rounded-full text-gray-700 font-serif hover:bg-gray-100 transition">
            <span className="group-hover:hidden">Hotel</span>
            <span className="group-hover:block hidden" >
              <IoIosArrowForward className="text-dark fs-xxl" />
            </span>
          </button>
        </div>

      </section>
    </div>
  )
}

export default Wellness