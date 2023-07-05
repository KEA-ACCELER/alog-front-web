import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { TopNavBar } from "./navigation/TopNavBar";
import { LeftNavSection } from "./navigation/LeftNavSection";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TopNavBar />}>
                    <Route index element={<Page1 />} />
                    <Route element={<LeftNavSection />}>
                        <Route path="/page2" element={<Page2 />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;
