// Express, web uygulamaları oluşturmak için kullanılan bir Node.js çerçevesidir.
const express = require("express");
// Yeni bir router nesnesi oluşturuyoruz.
// Bu, yönlendirme işlemleri için kullanılacak.
const router = express.Router();
// flightController dosyasından uçuşları alma ve ekleme fonksiyonlarını içe aktarıyoruz.
const { getFlights, setFlight } = require("../controllers/flightController");

// Uçuşlarla ilgili API rotalarını tanımlıyoruz.
router
    .route("/")
    .get(getFlights) // GET isteği ile uçuşları almak için getFlights fonksiyonunu kullanıyoruz.
    .post(setFlight); // POST isteği ile yeni bir uçuş eklemek için setFlight fonksiyonunu kullanıyoruz.

module.exports = router;
