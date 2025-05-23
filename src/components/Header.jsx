import { BiStar } from "react-icons/bi";
import { FaBars, FaShoppingBag } from "react-icons/fa";

const Header = () => {
    const navItems = ["Rooms", "welliness", "gastro", "hotel", "events", "contact"];
    return (
        <div className="header">
            <div className="d-flex justify-content-between align-items-center px-5 py-2 first-part-header">
                <div>
                    <button className="px-4 py-2 rounded-md text-white bg-[#032540] hover:bg-[#041b33] transition d-flex align-items-center gap-2">
                        <FaBars size={15} />
                        Menu
                    </button>
                </div>
                <div>
                    <div className="d-flex justify-content-center align-items-center gap-4">
                        <div>
                            <span style={{ letterSpacing: '3px' }} className="text-white">2022</span>
                        </div>
                        <div>
                            <img src="..\Group80.png" style={{ objectFit: 'cover', maxHeight: '50px' }} alt="" className="img-fluid" />
                        </div>
                        <div className="text-white d-flex justify-content-center align-items-center gap-1">
                            <BiStar />
                            <BiStar />
                            <BiStar />
                            <BiStar />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="px-4 py-2 rounded-md text-white bg-[#032540] hover:bg-[#041b33] transition d-flex align-items-center gap-2">
                        Booking
                        <FaShoppingBag size={15} />
                    </button>
                </div>
            </div>

            <div className="second-part-header ">
                <div className="d-flex justify-content-between align-items-center gap-12 text-white ">
                    {navItems.map((item, index) => (
                        <div key={index} className="header-nav-text">{item}</div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Header;
