import { useState } from "react";

function BookCard(props) {
    const baseUrl = "http://localhost:5000/update/book/";
    const [available, setAvailable] = useState(props.book.available)
    // console.log("Available: " + available);

    async function changeBookAvail(avail) {
        let flag = 0
        let url = baseUrl
        if (avail === "in") {
          url = url + props.book.id + "/checkin";
          flag = 1
        } else if (avail == "out") {
          url = url + props.book.id + "/checkout";
        }
        await fetch(url, {
          method: "GET",
        });
        props.book.available = flag
        setAvailable(flag) 
       
      }
    
      const checkOutBook = (e) => {
        // console.log("checking out book..." + props.book.id);
        return changeBookAvail("out");
      };
    
      const checkInBook = (e) => {
        // console.log("checking in book...");
        return changeBookAvail("in");
      };


    return (
        <li>
          <div className="book-card">
            <div className="book-card-info">
              <img
                className="book-card-image"
                alt="cover art of book"
                src={props.book.pic_url}
              />
              <div className="book-card-text">
                <p className="book-card-text-info">Title: {props.book.title}</p>
                <p className="book-card-text-info">
                  {" "}
                  Author: {props.book.author}
                </p>
                <p className="book-card-text-info">
                  Publisher: {props.book.publisher}
                </p>
                <p className="book-card-text-info">
                  Page count: {props.book.page_count} pages
                </p>
                <p
                  className={
                    props.book.available
                      ? "book-card-text-avail"
                      : "book-card-text-not-avail"
                  }
                >
                  {props.book.available
                    ? "Available for check out"
                    : "This book is currently checked out"}
                </p>
              </div>
            </div>
            <div className="book-card-buttons">
              <button
                className="book-card-button"
                onClick={checkOutBook}
              >
                Check out book
              </button>
              <button
                className="book-card-button"
                onClick={checkInBook}
              >
                Return book
              </button>
            </div>
          </div>
        </li>
      );



}

export default BookCard;