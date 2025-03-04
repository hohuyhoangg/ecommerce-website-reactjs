import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Shop from "../src/Pages/Shop";
import Contact from "../src/Pages/Contact";
import Blog from "../src/Pages/Blog";
import Header from "../src/Components/Header/Navbar";
import Footer from "../src/Components/Footer/Footer";
import ProductDetails from "./Pages/ProductDetails";
import NotFound from "./Pages/NotFound";
import ScrollToTop from "./Components/ScrollButton/ScrollToTop";
import Authentication from "./Pages/Authentication";
import ResetPass from "./Components/Authentication/Reset/ResetPass";
import BlogDetails from "./Components/Blog/BlogDetails/BlogDetails";
import TermsConditions from "./Pages/TermsConditions";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import Popup from "./Components/PopupBanner/Popup";
import Custom from "../src/Pages/Custom";
import { Toaster } from "react-hot-toast";
import RegisterUserStep1 from "../src/Pages/Custom/RegisterUserStep1";
import RegisterUserStep2 from "../src/Pages/Custom/RegisterUserStep2";
import RegisterUserStep3 from "../src/Pages/Custom/RegisterUserStep3";
import LoginForm from "../src/Pages/Custom/LoginForm";
import LoginFormOTP from "../src/Pages/Custom/LoginFormOtp";

const App = () => {
  return (
    <>
      <Popup />
      <ScrollToTop />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/loginSignUp" element={<Authentication />} />
          <Route path="/resetPassword" element={<ResetPass />} />
          <Route path="/BlogDetails" element={<BlogDetails />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/custom" element={<Custom />} />
          {/* Register User */}
          <Route path="/register-user-step-1" element={<RegisterUserStep1 />} />
          <Route path="/register-user-step-private-information" element={<RegisterUserStep2 />} />
          <Route path="/register-user-step-custom-information" element={<RegisterUserStep3 />} />
          {/* Login Form */}
          <Route path="/custom-login" element={<LoginForm />} />
          <Route path="/custom-login-otp" element={<LoginFormOTP />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
