import { Link } from "react-router-dom";

const Book = ({singleBook}) => {
    const {bookId, image, bookName, author, tags, category} = singleBook;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-80 shadow-xl p-4">
            <figure className="bg-slate-200 py-8 rounded-lg">
                <img className="h-[166px]"
                src={image}/>
            </figure>
            <div className="card-body">
            <div className="flex gap-2 justify-center">
                {
                    tags.map((tag, index) => <button key={index} className="btn btn-outline btn-info btn-xs w-1/2">{tag}</button>)
                }
            </div>
                <h2 className="card-title">
                {bookName}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By {author}</p>
                <div class="border-t-2 border-dashed"></div>
                <div className="card-actions justify-between">
                <div className="badge badge-outline">{category}</div>
                <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-300" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-500" />
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;