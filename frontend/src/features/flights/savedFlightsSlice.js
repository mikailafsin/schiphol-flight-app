// Bu fonksiyon, bir slice oluşturmak için kullanılır.
import { createSlice } from "@reduxjs/toolkit";

// Daha önce tanımlanan asenkron işlemleri içe aktarıyoruz.
import { fetchSavedFlights, saveFlightsToDatabase } from "./savedFlightsAPI";

const savedFlightsSlice = createSlice({
    name: "savedFlights",
    initialState: {
        savedFlights: [], // Kayıtlı uçuşları tutar.
        status: "idle", // İşlem durumu: idle, loading, succeeded, failed.
        error: null, // Hata mesajı.
    },
    reducers: {},
    // Asenkron işlemler için ek reducer'lar
    extraReducers: (builder) => {
        builder
            .addCase(fetchSavedFlights.pending, (state) => {
                state.status = "loading"; // İşlem başlatıldığında durumu loading olarak ayarlıyoruz.
            })
            // fetchSavedFlights işlemi başarılı olduğunda.
            .addCase(fetchSavedFlights.fulfilled, (state, action) => {
                state.status = "succeeded"; // İşlem başarılı olduğunda durumu succeeded olarak ayarlıyoruz.
                state.savedFlights = action.payload; // Alınan uçuş verilerini state'e kaydediyoruz.
            })
            // fetchSavedFlights işlemi başarısız olduğunda.
            .addCase(fetchSavedFlights.rejected, (state, action) => {
                state.status = "failed"; // İşlem başarısız olduğunda durumu failed olarak ayarlıyoruz.
                state.error = action.error.message; // Hata mesajını kaydediyoruz.
            })
            // saveFlightsToDatabase işlemi başarılı olduğunda.
            .addCase(saveFlightsToDatabase.fulfilled, (state, action) => {
                state.savedFlights.push(action.payload); // Kaydedilen uçuşu state'e ekliyoruz.
            });
    },
});

export default savedFlightsSlice.reducer;
