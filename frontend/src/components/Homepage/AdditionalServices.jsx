import { FaCar, FaHotel, FaUmbrellaBeach } from "react-icons/fa";
import ServicesCard from "./ServicesCard";
import { services } from "../../../services.json";

const iconMap = {
    FaCar: FaCar,
    FaHotel: FaHotel,
    FaUmbrellaBeach: FaUmbrellaBeach,
};

function AdditionalServices() {
    return (
        <div className="md:max-xl:flex md:max-xl:gap-4 xl:w-1/5">
            {services.map((service, index) => {
                const IconComponent = iconMap[service.iconType];

                return (
                    <ServicesCard
                        key={index}
                        bgImage={service.bgImage}
                        serviceType={service.serviceType}
                        iconType={<IconComponent />}
                    />
                );
            })}
        </div>
    );
}

export default AdditionalServices;
