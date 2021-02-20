



function Search({ props }) {
  console.log(props);
  return (
    <div>
        [{props}]
    </div>
  );
}

export async function getServerSideProps(context) {
  //   const router = useRouter();
  const author = context.query.author;
  let url = "http://localhost:5000/books?";
  if (author) {
    url += "author=" + author + "&&";
  }
  const res = await fetch(url, {
    method: "GET",
  });
  const books = await res.json();
  console.log("here");
  console.log(`Fetched ${books}`);
  console.log(books);
  const bookjson = books[0];
  console.log(JSON.stringify(books));
  console.log(bookjson);
  const data= {title: "hello"}
  console.log(data);
  return {props: {data: 'test'}}
}

export default Search;
