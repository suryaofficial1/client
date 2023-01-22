import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import AllProducts from './pages/AllProducts/AllProducts'
import "./app.scss"
import { ContactUs } from "./pages/Contact/ContactUs";
import { useMediaQuery } from "react-responsive";
import FooterMobile from "./components/Footer/FooterMobile";
import NavbarMobile from "./components/Navbar/NavbarMobile";
import AboutUs from "./pages/Aboutus/Aboutus";
import Nav from './components/NewNav/Nav'
import Terms from './pages/Terms&Cond/Terms'
import Privacy from "./pages/PrivacyPolicy/Privacy";
import Return from "./pages/ReturnPolicy/Return";
import Shipping from './pages/ShippingPolicy/Shipping'
import NewFooter from "./components/Footer/NewFooter";

const Layout = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
  return (
    <div className="app">

      {isTabletOrMobile?(<NavbarMobile/>):(<Nav />)}
      <Outlet />
      {/* {isTabletOrMobile?(<FooterMobile/>):(<Footer/>)} */}
      {(<NewFooter/>)}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/allproducts",
        element: <AllProducts />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/terms-condition",
        element: <Terms />,
      },
      {
        path: "/privacy-policy",
        element: <Privacy />,
      },
      {
        path: "/return-policy",
        element: <Return />,
      },
      {
        path: "/shipping-info",
        element: <Shipping />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
