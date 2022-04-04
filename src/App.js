import "@material-tailwind/react/tailwind.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import MobileMenu from "./components/Shared/MobileMenu/MobileMenu";
import Router from './util/Router/Router';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Router />
      <Footer />
      <MobileMenu />
    </>
  );
}

export default App;
