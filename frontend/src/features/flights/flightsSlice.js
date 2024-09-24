// Bu fonksiyon, bir slice oluşturmak için kullanılır.
import { createSlice } from "@reduxjs/toolkit";
// Uçuşları fetch etmek için oluşturduğumuz asenkron işlemi içe aktarıyoruz.
import { fetchFlights } from "./flightsAPI";

const flightsSlice = createSlice({
    name: "flights",
    initialState: {
        flights: [], // Tüm uçuşları tutan dizi
        filteredFlights: [], // Filtrelenmiş uçuşları tutan dizi
        filters: {
            // Filtreleme kriterleri
            departure: "",
            arrival: "",
            startDate: "",
            endDate: "",
        },
        status: "idle", // Durum (idle, loading, succeeded, failed)
        error: null, // Hata mesajı
    },
    reducers: {
        // Filtreleri ayarlamak için bir reducer
        setFilters(state, action) {
            // Filtreleri günceller ve filtrelenmiş uçuşları yeniden hesaplar
            state.filters = { ...state.filters, ...action.payload };
            state.filteredFlights = state.flights.filter((flight) => {
                const { departure, arrival, startDate, endDate } = state.filters;

                // Kalkış yeri ile eşleşen uçuşları kontrol eder
                const matchesDeparture =
                    !departure ||
                    (flight.flightDirection === "A"
                        ? flight.route.destinations.map((dest) => dest.toLowerCase())
                        : "AMS".toLowerCase()
                    ).includes(departure.toLowerCase());

                // Varış yeri ile eşleşen uçuşları kontrol eder
                const matchesArrival =
                    !arrival ||
                    (flight.flightDirection === "A"
                        ? "AMS".toLowerCase()
                        : flight.route.destinations.map((dest) => dest.toLowerCase())
                    ).includes(arrival.toLowerCase());

                // Başlangıç tarihi ile eşleşen uçuşları kontrol eder
                const matchesStartDate =
                    !startDate || new Date(flight.scheduleDateTime) >= new Date(startDate);

                // Bitiş tarihi ile eşleşen uçuşları kontrol eder
                const matchesEndDate =
                    !endDate || new Date(flight.scheduleDateTime) <= new Date(endDate);

                // Tüm koşulları sağlayan uçuşları döner
                return matchesDeparture && matchesArrival && matchesStartDate && matchesEndDate;
            });
        },
    },
    // Asenkron işlemler için ek reducer'lar
    extraReducers: (builder) => {
        builder
            .addCase(fetchFlights.pending, (state) => {
                // Uçuşları yüklerken durumunu "loading" olarak ayarlar
                state.status = "loading";
            })
            .addCase(fetchFlights.fulfilled, (state, action) => {
                // Uçuşlar başarıyla alındığında durumu "succeeded" yapar
                state.status = "succeeded";
                state.flights = action.payload.flights; // Alınan uçuşları kaydeder
                state.filteredFlights = action.payload.flights; // Filtrelenmiş uçuşları da günceller
            })
            .addCase(fetchFlights.rejected, (state, action) => {
                // Uçuşları alırken hata oluştuğunda durumu "failed" yapar
                state.status = "failed";
                state.error = action.error.message; // Hata mesajını kaydeder
            });
    },
});

export const { setFilters } = flightsSlice.actions;
export default flightsSlice.reducer;
