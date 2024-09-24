// Bu fonksiyon, bir slice oluşturmak için kullanılır.
import { createSlice } from "@reduxjs/toolkit";

// Eğer tema bilgisi yoksa varsayılan tema "light" olarak ayarlanıyor.
const savedTheme = localStorage.getItem("theme") || "light";

// Sayfanın kök öğesine (html) seçilen tema sınıfı ekleniyor.
document.documentElement.classList.add(savedTheme);

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: savedTheme, // Temanın başlangıç değeri.
    },
    reducers: {
        toggleTheme: (state) => {
            // Mevcut temaya göre yeni tema belirleniyor.
            const newTheme = state.value === "light" ? "dark" : "light";
            state.value = newTheme;
            localStorage.setItem("theme", newTheme); // Yeni tema localStorage'da saklanıyor.

            // Önceki tema sınıfı kaldırılıyor, ardından yeni tema sınıfı ekleniyor.
            document.documentElement.classList.remove(state.value === "light" ? "dark" : "light");
            document.documentElement.classList.add(newTheme);
        },
        setTheme: (state, action) => {
            state.value = action.payload; // Temanın durumu güncelleniyor.
            localStorage.setItem("theme", action.payload); // Yeni tema localStorage'da saklanıyor.

            // Önceki tema sınıfı kaldırılıyor, ardından belirtilen tema sınıfı ekleniyor.
            document.documentElement.classList.remove(state.value === "light" ? "dark" : "light");
            document.documentElement.classList.add(action.payload);
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
