// Mongoose, MongoDB ile etkileşim kurmak için kullanılan bir ORM kütüphanesidir.
const mongoose = require("mongoose");

// Uçuş verilerini temsil eden bir şema tanımlıyoruz.
const flightSchema = mongoose.Schema(
    {
        // Uçuşun planlanan tarih ve saatini tutan alan
        scheduleDateTime: String,
        // Uçuşun gerçekleşen iniş zamanını tutan alan
        actualLandingTime: String,
        // Uçuş numarasını tutan alan
        flightNumber: Number,
        // Uçuş yönünü belirtmek için kullanılan alan
        flightDirection: String,
        // Uçuşun gideceği güzergahları tutan dizi
        routeDestinations: Array,
        // Uçuş adını tutan alan
        flightName: String,
    },
    {
        // Her belgeye otomatik olarak oluşturulma ve güncellenme tarihlerini eklemek için timestamps özelliğini kullanıyoruz.
        timestamps: true,
    }
);

module.exports = mongoose.model("Flight", flightSchema);
