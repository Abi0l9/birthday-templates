import Router from "../../Router";
import Footer from "../Footer";
import Header from "../Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
