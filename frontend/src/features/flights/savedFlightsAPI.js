// Bu fonksiyon, asenkron işlemleri yönetmek için kullanılır.
import { createAsyncThunk } from "@reduxjs/toolkit";

// Axios, HTTP istekleri göndermek için kullanılan bir kütüphanedir.
import axios from "axios";

// Kayıtlı uçuşları almak için bir asenkron işlem tanımlıyoruz.
export const fetchSavedFlights = createAsyncThunk("savedFlights/fetchSavedFlights", async () => {
    // Uçuşları almak için bir GET isteği gönderiyoruz.
    const response = await axios.get("http://localhost:5000/api/flights");
    // Alınan verileri döndürüyoruz.
    return response.data;
});

// Uçuşları veritabanına kaydetmek için bir asenkron işlem tanımlıyoruz.
export const saveFlightsToDatabase = createAsyncThunk(
    "savedFlights/saveFlightsToDatabase",
    async (flight) => {
        // Uçuş verisini kaydetmek için bir POST isteği gönderiyoruz.
        const response = await axios.post("http://localhost:5000/api/flights", flight);
        // Kaydedilen uçuş verilerini döndürüyoruz.
        return response.data;
    }
);
