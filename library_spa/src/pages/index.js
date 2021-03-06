import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { BookContext } from "../contexts/book-context";

export default function Home() {
  const router = useRouter();
  const [contact, setContact] = useState({
    author: "",
    title: "",
    publisher: "",
  });

  const { setBooks } = useContext(BookContext);

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    let url = "http://localhost:5000/books?";

    if (contact.author) {
      url += "author=" + contact.author + "&&";
    }
    if (contact.title) {
      url += "title=" + contact.title + "&&";
    }
    if (contact.publisher) {
      url += "publisher=" + contact.publisher + "&&";
    }

    const res = await fetch(url, {
      method: "GET",
    });

    const booksToReturn = await res.json();
    setBooks(booksToReturn);

    router.push({
      pathname: "/search/results",
      query: {
        author: contact.author,
        title: contact.title,
        publisher: contact.publisher,
      },
    });
  }

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
          <label form="title">Title</label>
          <input
            id="form-title"
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Title..."
          />{" "}
          <label form="publisher">Publisher</label>
          <input
            id="form-publisher"
            type="text"
            name="publisher"
            onChange={handleChange}
            placeholder="Publisher..."
          />{" "}
          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </main>
    </div>
  );
}
