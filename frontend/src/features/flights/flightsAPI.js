// Bu fonksiyon, asenkron işlemleri yönetmek için kullanılır.
import { createAsyncThunk } from "@reduxjs/toolkit";
// Axios, HTTP istekleri göndermek için kullanılan bir kütüphanedir.
import axios from "axios";

// Asenkron bir işlem olan uçuşları fetch etmek için bir thunk oluşturuyoruz.
export const fetchFlights = createAsyncThunk("flights/fetchFlights", async () => {
    // Schiphol uçuş verilerini almak için bir GET isteği gönderiyoruz.
    const response = await axios.get("http://localhost:5000/api/schiphol-flights");
    // Alınan verileri döndürüyoruz.
    return response.data;
});
