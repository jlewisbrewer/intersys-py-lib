import { createContext } from "react";
import { useState } from 'react';


export const BookContext = createContext({
    books: [],
    setBooks: () => {},
});

export const BookContextProvider = (props) => {
  
    const setBooks = (books) => {
      setState({...state, books: books})
    }
  
    const initState = {
      books: [],
      setBooks: setBooks
    } 
  
    const [state, setState] = useState(initState)
  
    return (
      <BookContext.Provider value={state}>
        {props.children}
      </BookContext.Provider>
    )
  }