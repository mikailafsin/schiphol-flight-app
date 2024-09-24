// Axios, HTTP istekleri yapmak için kullanılan bir kütüphanedir.
const axios = require("axios");
// Bu modül, asenkron işlemleri hatalarla daha iyi yönetmemizi sağlar.
const asyncHandler = require("express-async-handler");

// @desc    Get schiphol flights
// @route   GET /api/schiphol-flights
// @access  Public
const getSchipholFlights = asyncHandler(async (req, res) => {
    // Schiphol API'sinden uçuş verilerini almak için GET isteği gönderiyoruz.
    const response = await axios.get("https://api.schiphol.nl/public-flights/flights", {
        headers: {
            // API sürüm bilgisi ve kimlik doğrulama bilgilerini başlıklara ekliyoruz.
            ResourceVersion: "v4",
            app_id: process.env.SCHIPHOL_APP_ID, // Çevresel değişkenden alınan uygulama kimliği.
            app_key: process.env.SCHIPHOL_APP_KEY, // Çevresel değişkenden alınan uygulama anahtarı.
            Accept: "application/json", // API'den JSON formatında veri almak istediğimizi belirtiyoruz.
        },
    });

    // Eğer API'den gelen yanıtta veri yoksa, 400 durum kodu ile hata mesajı fırlatıyoruz.
    if (!response.data) {
        res.status(400);
        throw new Error("Error fetching schiphol flights");
    }

    // Uçuş verilerini başarıyla aldıysak, 200 durum kodu ile birlikte geri döndürüyoruz.
    res.status(200).json(response.data);
});

module.exports = {
    getSchipholFlights,
};
