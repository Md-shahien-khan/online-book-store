import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect( () => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])

    return (
        <div className="border-2">
            <h2 className="text-4xl text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book 
                        key = {book.bookId} 
                        singleBook={book}>                            
                        </Book>)
                }
            </div>
        </div>
    );
};

export default Books;

// 1. state to store books
// 2. use useEffect
// 3. fetch to load data and set it to setBooks