// Express, web uygulamaları oluşturmak için kullanılan bir Node.js çerçevesidir.
const express = require("express");
// Yeni bir router nesnesi oluşturuyoruz.
// Bu, yönlendirme işlemleri için kullanılacak.
const router = express.Router();
// Schiphol uçuşlarını alma fonksiyonunu flightController dosyasından içe aktarıyoruz.
const { getSchipholFlights } = require("../controllers/schipholFlightController");

// "/" rotası için GET isteği ile Schiphol uçuşlarını almak için getSchipholFlights fonksiyonunu yönlendiriyoruz.
router.route("/").get(getSchipholFlights); // GET isteği ile Schiphol uçuşlarını almak için getSchipholFlights fonksiyonunu kullanıyoruz.

module.exports = router;
