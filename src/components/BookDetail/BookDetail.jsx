import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {


    const {bookId} = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();

    

    const book = data.find(book => book.bookId === id);

    const {bookId : currentBookId, image, bookName, author, review, totalPages, publisher,yearOfPublishing} = book;
    // console.log(book)

    // console.log(typeof bookId, typeof id, typeof data[0].bookId);



    return (
        
        <div className="hero bg-base-200 min-h-fit">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="w-80" />
          <div>
            <h1 className="font-bold">Book Id : {currentBookId}</h1>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-6">{review}</p>
            <p className="font-bold py-2">By {author}</p>
            <p className="font-bold py-2">Total page :  {totalPages}</p>
            <p className="font-bold py-2">Publisher :  {publisher}</p>
            <p className="font-bold py-2">Publish Year :  {yearOfPublishing}</p>
            <div className="flex gap-2">
            <button className="btn btn-outline btn-info">Read</button>
            <button className="btn btn-outline btn-success">Wish List</button>
            </div>
          </div>
        </div>
      </div>



    );
};

export default BookDetail;