import React, { Suspense, useState, lazy } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import WebWorker from "react-webworker";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
// import "bootstrap/dist/css/custom.scss";
import TopMenu from "./components/TopMenu";
import Header from "./components/Header";
import Footer from "./components/Footer";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.theme.default.css';
import Carousel from 'react-elastic-carousel';
import AllProduct from "./views/pages/AllProduct";
import axios from "axios";
// import Policy from "./views/pages/Policy";
import "./App.min.css";
//const Header = lazy(() => import("./components/Header"));
//const TopMenu = lazy(() => import("./components/TopMenu"));
const HomeView = lazy(() => import("./views/Home"));
const SignInView = lazy(() => import("./views/account/SignIn"));
const SignUpView = lazy(() => import("./views/account/SignUp"));
const ForgotPasswordView = lazy(() => import("./views/account/ForgotPassword"));
const OrdersView = lazy(() => import("./views/account/Orders"));
const WishlistView = lazy(() => import("./views/account/Wishlist"));
const NotificationView = lazy(() => import("./views/account/Notification"));
const MyProfileView = lazy(() => import("./views/account/MyProfile"));
const ProductListView = lazy(() => import("./views/product/List"));
const ProductDetailView = lazy(() => import("./views/product/Detail"));
const StarZoneView = lazy(() => import("./views/product/StarZone"));
const CartView = lazy(() => import("./views/cart/CartView"));
const CheckoutView = lazy(() => import("./views/cart/Checkout"));
const DocumentationView = lazy(() => import("./views/Documentation"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));
const ContactUsView = lazy(() => import("./views/pages/ContactUs"));
const PolicyView = lazy(() => import("./views/pages/Policy"));
const AboutUsView = lazy(() => import("./views/pages/AboutUs"))
const SupportView = lazy(() => import("./views/pages/Support"));
const ReturnPolicyView = lazy(() => import("./views/pages/ReturnPolicy"));
const BlogView = lazy(() => import("./views/blog/Blog"));
const BlogDetailView = lazy(() => import("./views/blog/Detail"));
const ProductCarouselView = lazy(() => import("./components/carousel/ProductCarousel"));





function App() {

  


 
  return (
    
    <BrowserRouter>
      <React.Fragment>
        <Header  />
        <TopMenu />
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/account/signin" component={SignInView} />
            <Route exact path="/account/signup" component={SignUpView} />
           
            <Route
              exact
              path="/account/forgotpassword"
              component={ForgotPasswordView}
            />
            <Route exact path="/account/profile" component={MyProfileView} />
            <Route exact path="/account/orders" component={OrdersView} />
            <Route exact path="/account/wishlist" component={WishlistView} />
            <Route
              exact
              path="/account/notification"
              component={NotificationView}
            />

            
            {/* <Route exact path="/policy" element={<Policy/>} /> */}
            <Route exact path="/category" component={ProductListView} />
            <Route path="/product/:id" render={(props)=> <ProductDetailView {...props} /> }  />
            <Route exact path="/star/zone" component={StarZoneView} />
            <Route exact path="/cart" component={CartView} />
            <Route exact path="/checkout" component={CheckoutView} />
            <Route exact path="/documentation" component={DocumentationView} />
            <Route exact path="/contact-us" component={ContactUsView} />
            <Route exact path="/policy" component={PolicyView} />
            <Route exact path="/about_us" component={AboutUsView} />
            <Route exact path="/return_policy" component={ReturnPolicyView} />
            <Route exact path="/support" component={SupportView} />
            <Route exact path="/blog" component={BlogView} />
            <Route exact path="/blog/detail" component={BlogDetailView} />
            <Route exact path="/500" component={InternalServerErrorView} />
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
        
        <Footer />
        
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
