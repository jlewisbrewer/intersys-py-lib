import { useContext} from 'react';
import { BookContext } from '../../contexts/book-context'


function Search() {

  const {books, setBooks} = useContext(BookContext)
  const numResults = books.length

  console.log(books.length);
  return (
    <div className="results-container">
      <div className="results-header">
      <h1>Your search yielded {numResults} results:</h1>
      </div>
      <div>
        {books.map(function(b, i){
          return <li key={i}>{b.title}</li>
        })}
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
