import AdditionalServices from "../components/Homepage/AdditionalServices";
import FlightResults from "../components/Homepage/FlightResults";
import FlightSearch from "../components/Homepage/FlightSearch";
import FlightsOptions from "../components/Homepage/FlightsOptions";
import Header from "../components/Homepage/Header";

function HomePage() {
    return (
        <div className="bg-gray-100 font-poppins text-xs dark:bg-gray-600 sm:text-sm">
            <div className="container mx-auto p-4 sm:p-8">
                <Header />
                <main className="xl:flex xl:gap-8">
                    <div className="xl:w-4/5">
                        {/* Uçuş arama bileşenini render ediyoruz */}
                        <FlightSearch />
                        <div className="lg:flex lg:gap-8">
                            {/* Uçuş sonuçları bileşenini render ediyoruz */}
                            <FlightResults />
                            {/* Uçuş seçenekleri bileşenini render ediyoruz */}
                            <FlightsOptions />
                        </div>
                    </div>
                    <AdditionalServices />
                </main>
            </div>
        </div>
    );
}

export default HomePage;
