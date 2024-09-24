function ServicesCard({ bgImage, serviceType, iconType }) {
    return (
        <div
            className={`relative mb-4 aspect-square w-full cursor-pointer overflow-hidden rounded-xl ${bgImage} bg-cover bg-center bg-no-repeat`}
        >
            <div className="absolute bottom-5 left-5 text-xl font-semibold text-white">
                {iconType}
                <p className="uppercase">{serviceType}</p>
            </div>
        </div>
    );
}

export default ServicesCard;
