import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Redux, uygulama durumunu yönetmek için kullanılır.
import { store } from "./app/store";
// Provider, Redux store'unu uygulamanın alt bileşenlerine sağlamak için kullanılır.
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* Redux store'u sağlayarak App bileşenini sarıyoruz. */}
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
