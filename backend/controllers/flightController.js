// Bu modül, asenkron işlemleri hatalarla daha iyi yönetmemizi sağlar.
const asyncHandler = require("express-async-handler");
const Flight = require("../models/flightModel");

// @desc    Get flights
// @route   GET /api/flights
// @access  Public
const getFlights = asyncHandler(async (req, res) => {
    // Flight modelini kullanarak tüm uçuşları veritabanından alıyoruz.
    const flights = await Flight.find();
    // Uçuş verilerini başarıyla bulduktan sonra, 200 durum kodu ile birlikte geri döndürüyoruz.
    res.status(200).json(flights);
});

// @desc    Set flights
// @route   POST /api/flights
// @access  Public
const setFlight = asyncHandler(async (req, res) => {
    // Eğer istek gövdesinde veri yoksa, 400 durum kodu ile hata mesajı fırlatıyoruz.
    if (!req.body) {
        res.status(400);
        throw new Error("Please select a flight");
    }

    // İstek gövdesinden gerekli verileri çıkarıyoruz.
    const { scheduleDateTime, actualLandingTime, flightNumber, flightDirection, routeDestinations, flightName } = req.body;

    // Yeni bir uçuş oluşturuyoruz ve veritabanına kaydediyoruz.
    const flight = await Flight.create({
        scheduleDateTime,
        actualLandingTime,
        flightNumber,
        flightDirection,
        routeDestinations,
        flightName,
    });

    // Yeni oluşturulan uçuşu 200 durum kodu ile birlikte geri döndürüyoruz.
    res.status(200).json(flight);
});

module.exports = {
    getFlights,
    setFlight,
};
