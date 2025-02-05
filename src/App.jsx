import BooksPage from "./views/BooksPage.jsx";
import SingleBookPage from "./views/SingleBookPage.jsx";
import AddBookPage from "./views/AddBookPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="book/:id" element={<SingleBookPage />} />
          <Route path="add-book" element={<AddBookPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
