import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [contact, setContact] = useState({
    author: "",
    title: "",
    publisher: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(contact.author);
    let url = "http://localhost:5000/books?";
  if (contact.author) {
    url += "author=" + contact.author + "&&";
  }
  const res = await fetch(url, {
    method: "GET",
  });
  const books = await res.json();
  console.log(books);
    // router.push({
    //   pathname: "/books/search",
    //   query: { author: contact.author },
    // });
  };

  return (
    <div className="join-container">
      <header className="join-header">
        <h1>
          <i className="fas fa-smile"></i> InterSys Library
        </h1>
      </header>
      <main className="join-main">
        <form onSubmit={handleSubmit}>
          <label form="author">Author</label>
          <input
            id="form-author"
            type="text"
            name="author"
            onChange={handleChange}
            placeholder="Author..."
          />
          {/* <label form="title">Title</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title..." />
      <label form="publisher" >Publisher</label>
      <input type="text"value={publisher} onChange={(e) => setPublisher(e.target.value)} placeholder="Publisher..." /> */}
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </main>
    </div>
  );
}
