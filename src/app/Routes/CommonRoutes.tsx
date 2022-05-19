import { Route, Routes } from "react-router-dom";
import BookRoutes from "../../features/Book/Routes/BookRoutes";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="/" element="Thực tập tốt nghiệp" />
            <Route path="books/*" element={<BookRoutes />} />
        </Routes>
    );
};

export default CommonRoutes;
