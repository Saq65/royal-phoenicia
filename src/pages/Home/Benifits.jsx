import { MdRoomService } from "react-icons/md";
import { PiSwimmingPoolThin } from "react-icons/pi";
import { LuDoorOpen } from "react-icons/lu";
import "../../styles/Benifits.css";

const benefitsData = [
    {
        icon: <MdRoomService size={40} />,
        title: "Restaurant",
        description:
            "Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest.",
    },
    {
        icon: <PiSwimmingPoolThin size={40} />,
        title: "Pool",
        description:
            "Royal Phoenicia Hotel features multiple outdoor swimming pools, including a dedicated children's pool, offering relaxation for all guests.",
    },
    {
        icon: <LuDoorOpen size={40} />,
        title: "Room",
        description:
            "Royal Phoenicia Hotel in Manama, Bahrain, offers a variety of spacious and well-equipped rooms to suit diverse guest preferences.",
    },
];

const Benefits = () => {
    return (
        <div className="container my-5 ">
            <div className="row text-center">
                {benefitsData.map((item, index) => (
                    <div key={index} className="col-md-4 mb-5">
                        <div className="benefits-icon text-dark mb-3">{item.icon}</div>
                        <h5 className="benefits-title">{item.title}</h5>
                        <p className="benefits-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Benefits;
