import { useSelector, useDispatch } from "react-redux";
import { addNote, eraseNote, selectNotes } from "../store/noteSlice.js";

function Notes({ bookId }) {
  const dispatch = useDispatch();
  const notes = useSelector(selectNotes).filter(
    (note) => note.book_id === parseInt(bookId)
  );

  function handleErasenote(id) {
    if (confirm("DO YOU WANT REMOVE THE NOTE")) dispatch(eraseNote(id));
  }

  function handleAddNote(e, bookId) {
    e.preventDefault();
    const newNote = {
      book_id: parseInt(bookId),
      title: document.querySelector("input[name=title]").value,
      text: document.querySelector("textarea[name=note]").value,
    };

    if (newNote.title && newNote.text) {
      dispatch(addNote(newNote));
      console.log("The note was added successfully");
      document.querySelector("input[name=title]").value = "";
      document.querySelector("textarea[name=note]").value = "";
    } else {
      alert("Please enter both title and note");
    }
  }

  return (
    <>
      <div className="notes-wrapper">
        <h2>Reader's Notes</h2>

        <div className="notes">
          {notes.length > 0 ? (
            notes.map((note) => (
              <div key={note.id} className="note">
                <div
                  on
                  onClick={() => handleErasenote(note.id)}
                  className="erase-note"
                >
                  Erase note
                </div>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            ))
          ) : (
            <p>
              No notes available for this book. You can add notes by clicking
              below.
            </p>
          )}
        </div>

        <details>
          <summary>Add a note</summary>
          <form className="add-note">
            <div className="form-control">
              <label>Title *</label>
              <input type="text" name="title" placeholder="Add a note title" />
            </div>
            <div className="form-control">
              <label>Note *</label>
              <textarea type="text" name="note" placeholder="Add note" />
            </div>

            <button
              onClick={(e) => handleAddNote(e, bookId)}
              className="btn btn-block"
            >
              Add Note
            </button>
          </form>
        </details>
      </div>
    </>
  );
}

export default Notes;
