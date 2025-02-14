import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "bootstrap-icons/font/bootstrap-icons.css"; // Icons
import NavigationBar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}
