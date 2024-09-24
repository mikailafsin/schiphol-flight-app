// Bu fonksiyon, Redux store'unu yapılandırmak için kullanılır.
import { configureStore } from "@reduxjs/toolkit";

// Uçuşlar ile ilgili durumu yöneten reducer'ları içe aktarıyoruz.
import flightsReducer from "../features/flights/flightsSlice";
import savedFlightsReducer from "../features/flights/savedFlightsSlice";
import themeReducer from "../features/flights/themeSlice";

export const store = configureStore({
    reducer: {
        flights: flightsReducer, // Uçuş durumunu yöneten reducer
        savedFlights: savedFlightsReducer, // Kaydedilmiş uçuşlar durumunu yöneten reducer
        theme: themeReducer, // Tema durumunu yöneten reducer
    },
});
