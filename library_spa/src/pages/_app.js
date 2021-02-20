import "../styles/global.css";
import {BookContextProvider} from '../contexts/book-context'

const MyApp = ({ Component, pageProps }) => {
  return (
    <BookContextProvider>
      <Component {...pageProps} />
    </BookContextProvider>
  );
};

export default MyApp;
