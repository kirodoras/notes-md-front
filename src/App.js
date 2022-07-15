import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCss from "./styles/ResetCss";
import GlobalCss from "./styles/GlobalCss";

import MainScreen from "./components/MainScreen";
import ErrorScreen from "./components/ErrorScreen";

export default function App() {

    return (
        <BrowserRouter>
            <ResetCss />
            <GlobalCss />
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="*" element={<ErrorScreen />} />
            </Routes>
        </BrowserRouter>
    );
}