const express = require("express"); // Express.js çerçevesi
const cors = require("cors"); // CORS desteği
const bodyParser = require("body-parser"); // HTTP istek gövdesini ayrıştırmak için
const dotenv = require("dotenv").config(); // Çevresel değişkenleri yüklemek için
const { errorHandler } = require("./middleware/errorMiddleware"); // Hata işleme middleware'i
const connectDB = require("./config/db"); // MongoDB'ye bağlantı sağlamak için
const port = process.env.PORT || 5000; // Port numarasını çevresel değişkenden alıyoruz, yoksa 5000 olarak ayarlıyoruz.

// MongoDB veritabanına bağlantıyı sağlıyoruz.
connectDB();

const app = express(); // Yeni bir Express uygulaması oluşturuyoruz.

// Uygulamada CORS'u etkinleştiriyoruz, bu diğer kaynaklardan gelen istekleri kabul etmemizi sağlar.
app.use(cors());

// İstek gövdesini JSON formatında ayrıştırmak için body-parser kullanıyoruz.
app.use(bodyParser.json());

// express.json() ile JSON formatındaki isteklere yanıt verecek şekilde ayarlıyoruz.
app.use(express.json());

// URL kodlamalı verileri ayrıştırmak için express.urlencoded() kullanıyoruz.
app.use(express.urlencoded({ extended: false }));

// "/api/flights" rotasında uçuşlarla ilgili işlemleri yönlendiren flightRoutes modülünü kullanıyoruz.
app.use("/api/flights", require("./routes/flightRoutes"));

// "/api/schiphol-flights" rotasında Schiphol uçuşlarıyla ilgili işlemleri yönlendiren schipholFlightRoutes modülünü kullanıyoruz.
app.use("/api/schiphol-flights", require("./routes/schipholFlightRoutes"));

// Uygulama genelinde hata işlemesi için hata işleme middleware'ini ekliyoruz.
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
