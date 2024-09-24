// Arka planda kullanacağımız verileri sağlayacak.
import { services } from "./services.json";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    // Karanlık modun nasıl etkinleştirileceğini belirliyoruz.
    darkMode: "class",

    // Safelist (güvenli liste) kullanarak belirli sınıfların Tailwind CSS tarafından üretilmesini sağlıyoruz.
    safelist: services.map((service) => service.bgImage),
    theme: {
        extend: {
            // Kullanıcı tanımlı yazı tiplerini ekliyoruz.
            fontFamily: {
                poppins: ["Poppins, sans-serif"],
            },
            // Her bir anahtar, Tailwind CSS sınıfına karşılık gelir ve ilgili resim yolunu içerir.
            backgroundImage: {
                "car-rental": "url('./assets/images/car-rental.jpg')",
                hotels: "url('./assets/images/hotels.webp')",
                "travel-packages": "url('./assets/images/travel-packages.jpg')",
                "icon-moon": "url('./assets/images/icon-moon.svg')",
                "icon-sun": "url('./assets/images/icon-sun.svg')",
            },
        },
    },
    plugins: [],
};
