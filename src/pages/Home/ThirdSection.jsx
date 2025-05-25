import { IoIosArrowForward } from "react-icons/io";
import "../../styles/Thirdsection.css";

export const ThirdSection = () => {
    return (
        <div>
            <div className="third-section-container ">
                <div className="row w-100 mx-auto">
                    <div
                        className="col-lg-4 zoom-bg"
                        style={{
                            background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../images/first-j.jpg')`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }}                    >
                        <div className="zoom-content">
                            <div>
                                <p>Fitness
                                    <span className="">Center</span>
                                </p>
                                <div className="d-flex justify-content-center align-items-center w-100 h-100 forthose-container">
                                    <p className="forthose">For those looking to maintain their fitness routine while traveling,
                                        the hotel offers a well-equipped fitness center.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 zoom-bg d-flex flex-column"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('../images/third-j.jpg')`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '560px'
                        }}
                    >
                        <div className="mb-5 mt-4 animate-bounce  flex items-center justify-center">
                            <div className="border border-gray-400 rounded w-10 h-10 flex items-center justify-center">
                                <span className="text-xl text-light font-serif">III</span>
                            </div>
                        </div>
                        <div className="zoom-content">
                            <div>
                                <p>
                                    on-Site <br />
                                    <span>Dining</span>
                                </p>
                                <div className="d-flex justify-content-center align-items-center w-100 h-100 forthose-container">
                                    <p className="forthose">
                                        For those looking to maintain their fitness routine while traveling, the hotel offers a well-equipped fitness center.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-auto p-3">
                          <div className="group relative mt-10">
                                   <button className="px-6 py-2 bg-light border border-gray-500 rounded-full text-gray-700 font-serif hover:bg-gray-100 transition">
                                     <span className="group-hover:hidden">Spa & Wellness</span>
                                     <span className="group-hover:block hidden" >
                                       <IoIosArrowForward className="text-dark fs-xxl" />
                                     </span>
                                   </button>
                                 </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-4 zoom-bg"
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('../images/second-j.jpg')` }}
                    >
                        <div className="zoom-content">
                            <div>
                                <p>Wellness center
                                    <span className="">& Spa</span>
                                </p>
                                <div className="d-flex justify-content-center align-items-center w-100 h-100 forthose-container">
                                    <p className="forthose">For those looking to maintain their fitness routine while traveling,
                                        the hotel offers a well-equipped fitness center.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
