import Header from "../components/Header.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../store/bookSlice.js";
function AddBookPage() {
  const pageTitle = "Add Book";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function addBookHandler(e) {
    e.preventDefault();
    const newBook = {
      title: document.querySelector("input[name=title]").value,
      cover: document.querySelector("input[name=cover]").value,
      isRead: false,
      author: document.querySelector("input[name=author]").value,
      synopsis: document.querySelector("textarea[name=synopsis]").value,
    };
    if (newBook.title && newBook.cover && newBook.author) {
      dispatch(addBook(newBook));
      console.log("The book added successfully");
    } else {
      alert("Pls enter all the value");
    }

    navigate("/");
  }

  return (
    <>
      <div className="container">
        <Header pageTitle={pageTitle} />

        <form className="add-form">
          <div className="form-control">
            <label>Title *</label>
            <input type="text" name="title" placeholder="Add Book Title" />
          </div>
          <div className="form-control">
            <label>Book Cover *</label>
            <input type="text" name="cover" placeholder="Add Cover" />
          </div>

          <div className="form-control">
            <label>Author *</label>
            <input type="text" name="author" placeholder="Add Author" />
          </div>

          <div className="form-control">
            <label>Synopsis *</label>
            <textarea
              type="text"
              name="synopsis"
              placeholder="Add a synopsis..."
            />
          </div>

          <button onClick={(e) => addBookHandler(e)} className="btn btn-block">
            Save Book
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBookPage;
