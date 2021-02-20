import { useContext } from "react";
import { BookContext } from "../../contexts/book-context";

function Search() {
  const { books } = useContext(BookContext);
  const numResults = books.length;

  console.log(books.length);
  return (
    <div className="results-container">
      <div className="results-header">
        <h1>Your search yielded {numResults} result(s):</h1>
      </div>
      <div>
        <ul>
        {books.map(function (book, i) {
          return (
            <li>
            <div className="book-card">
              <img className="book-card-image" alt="cover art of book" src={book.pic_url}/>
              <div className="book-card-text">
              <p className="book-card-text-info">Title: {book.title}</p>
              <p className="book-card-text-info"> Author: {book.author}</p>
              <p className="book-card-text-info">Publisher: {book.publisher}</p>
              <p className="book-card-text-info">Page count: {book.page_count} pages</p>
              <p className="book-card-text-info-checkout">Available for check out</p>
              </div>
            </div>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   //   const router = useRouter();
//   const author = context.query.author;
//   let url = "http://localhost:5000/books?";
//   if (author) {
//     url += "author=" + author + "&&";
//   }
//   const res = await fetch(url, {
//     method: "GET",
//   });
//   const books = await res.json();
//   console.log("here");
//   console.log(`Fetched ${books}`);
//   console.log(books);
//   const bookjson = books[0];
//   console.log(JSON.stringify(books));
//   console.log(bookjson);
//   const data= {title: "hello"}
//   console.log(data);
//   return {props: {data: 'test'}}
// }

export default Search;
