import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([]); 
  const [newBook, setNewBook] = useState({ title: '', author: '' }); 

  
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }))
  }

  
  const handleSubmit = (event) => {
    event.preventDefault()

    
    if (!newBook.title.trim() || !newBook.author.trim()) {
      alert('Please enter both a title and an author.')
      return
    }

   
    setBooks((prevBooks) => [...prevBooks, newBook])

    
    setNewBook({ title: '', author: '' })
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        <h3>Bookshelf</h3>
        {books.length === 0 ? (
          <p>No books added yet.</p>
        ) : (
          <div className="book-list">
            {books.map((book, index) => (
              <div key={index} className="book-card">
                <h4>{book.title}</h4>
                <p>by {book.author}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookshelf;
