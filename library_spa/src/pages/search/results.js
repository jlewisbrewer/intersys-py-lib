import { useContext } from "react";
import { BookContext } from "../../contexts/book-context";
import BookCard from "../../components/book-card";

function Search() {
  const { books } = useContext(BookContext);
  const numResults = books.length;
 
  return (
    <div className="results-container">
      <div className="results-header">
        <h1>Your search yielded {numResults} result(s):</h1>
      </div>
      <div>
        <ul>
          {books.map((book, i) => (
             <BookCard book={book} key={i}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
