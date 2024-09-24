// BrowserRouter, uygulamanın yönlendirme mantığını yönetir.
// Routes, uygulamadaki rotaları tanımlar.
// Route, belirli bir yol için hangi bileşenin render edileceğini belirtir.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ToastContainer, kullanıcıya bildirim göstermek için kullanılır.
import { ToastContainer } from "react-toastify";

// Bildirimlerin görünümünü düzenler.
import "react-toastify/dist/ReactToastify.css";

// Uygulamanın sayfa bileşenlerini içe aktarıyoruz.
import HomePage from "./pages/HomePage"; // Ana sayfa bileşeni
import MyFlights from "./pages/MyFlights"; // Kullanıcının uçuşlarını gösteren bileşen

function App() {
    return (
        <>
            <Router>
                <Routes>
                    {/* Ana sayfa için yönlendirme */}
                    <Route path="/" element={<HomePage />} />
                    {/* Kullanıcının uçuşlarını gösteren sayfa için yönlendirme */}
                    <Route path="/my-flights" element={<MyFlights />} />
                </Routes>
            </Router>
            {/* Kullanıcı bildirimleri için ToastContainer bileşenini yerleştiriyoruz. */}
            <ToastContainer
                position="top-center" // Bildirimlerin ekranın üst ortasında görünmesini sağlıyoruz.
                hideProgressBar={true} // İlerleme çubuğunu gizliyoruz.
                closeButton={false} // Kapatma butonunu gizliyoruz.
                className={"m-4 w-fit overflow-hidden rounded-lg md:m-0 md:rounded-2xl"}
            />
        </>
    );
}

export default App;
