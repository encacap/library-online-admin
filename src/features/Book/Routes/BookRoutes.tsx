import { Route, Routes } from "react-router-dom";
import BookManagement from "../BookManagement";

const BookRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<BookManagement />} />
        </Routes>
    );
};

export default BookRoutes;
