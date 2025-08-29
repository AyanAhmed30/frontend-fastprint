import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserDashboard from './pages/UserDashboard';
import StartProject from './pages/StartProject';
import DesignProject from './pages/DesignProject';
import BookPricing from './pages/BookPricing';
import Shop from './pages/Shop';
import CoverExpert from './pages/CoverExpert';
import Payment from './pages/Payment';
import Products from './pages/Products';
import Services from './pages/Services';

// Main Pages
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import PricingCalculator from './pages/PricingCalculator';
import Portfolio from './pages/Portfolio';
import PrintShop from './pages/PrintShop';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Orders from './pages/Orders';

// Calculators
import PrintBookCalculator from './pages/PrintBookCalculator';
import ComicBookCalculator from './pages/ComicBookCalculator';
import PhotoBookCalculator from './pages/PhotoBookCalculator';
import MagazineCalculator from './pages/MagazineCalculator';
import YearBookCalculator from './pages/YearBookCalculator';
import CalenderCalculator from './pages/CalenderCalculator';
import AdminDashboard from './pages/AdminDashboard';

// Auth & Account Pages
import ResetPassword from './pages/ResetPassword';
import ResetPasswordConfirm from './pages/ResetPasswordConfirm';
import VerifyEmail from './pages/VerifyEmail';
import AccountSettings from './pages/AccountSettings';

// Admin Pages
import ManageUsers from './pages/ManageUsers';
import ManageBooks from './pages/ManageBooks';
import EditComicBook from './pages/MangeBook/EditComicBook';
import EditCalendarSettings from './pages/MangeBook/EditCalendarSettings';
import EditPhotoBookSettings from './pages/MangeBook/EditPhotoBookSettings';
import PrintBookEditSettings from './pages/MangeBook/PrintBookEditSettings';
import YearBookEditSettings from './pages/MangeBook/YearBookEditSettings';
import MagazineEditSettings from './pages/MangeBook/MagazineEditSettings';
import ThesisEditSettings from './pages/MangeBook/ThesisEditSettings';
import ManageOrders from './pages/ManageOrders';
import OrderInfo from './pages/OrderInfo';
import ManageShipping from './pages/ManageShipping';
import AdminPaymentSettings from './pages/AdminPaymentSettings';
import UserInfo from './pages/UserInfo';

// Payment Gateway
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/pricing-calculator" element={<PricingCalculator />} />
      <Route path="/book-pricing" element={<BookPricing />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/print-shop" element={<PrintShop />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />

      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-password/:uidb64/:token" element={<ResetPasswordConfirm />} />
      <Route path="/verify-email/:uidb64/:token" element={<VerifyEmail />} />

      {/* User Dashboard & Project Pages */}
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/account-settings" element={<AccountSettings />} />
      <Route path="/start-project" element={<StartProject />} />
      <Route path="/design-project" element={<DesignProject />} />
      <Route path="/cover-expert" element={<CoverExpert />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/orders" element={<Orders />} />

      {/* Pricing Calculators */}
      <Route path="/calculator/printbook" element={<PrintBookCalculator />} />
      <Route path="/calculator/comicbook" element={<ComicBookCalculator />} />
      <Route path="/calculator/photobook" element={<PhotoBookCalculator />} />
      <Route path="/calculator/magazine" element={<MagazineCalculator />} />
      <Route path="/calculator/yearbook" element={<YearBookCalculator />} />
      <Route path="/calculator/calender" element={<CalenderCalculator />} />

      {/* Admin Dashboard */}
      <Route path="/admin" element={<AdminDashboard />} />
      
      {/* Admin Management Pages */}
      <Route path="/manage-users" element={<ManageUsers />} />
      <Route path="/manage-books" element={<ManageBooks />} />
      <Route path="/admin/orders" element={<ManageOrders />} />
      <Route path="/admin/order-info" element={<OrderInfo />} />
      <Route path="/admin/shipping" element={<ManageShipping />} />
      <Route path="/admin/payment" element={<AdminPaymentSettings />} />
      <Route path="/admin/usersinfo" element={<UserInfo />} />

      {/* Admin Book Settings */}
      <Route path="/admin/books/comic/edit" element={<EditComicBook />} />
      <Route path="/admin/books/calendar/edit" element={<EditCalendarSettings />} />
      <Route path="/admin/books/photo/edit" element={<EditPhotoBookSettings />} />
      <Route path="/admin/books/printbook/edit" element={<PrintBookEditSettings />} />
      <Route path="/admin/books/yearbook/edit" element={<YearBookEditSettings />} />
      <Route path="/admin/books/magazinebook/edit" element={<MagazineEditSettings />} />
      <Route path="/admin/books/thesis/edit" element={<ThesisEditSettings />} />

      {/* Payment Gateway Routes */}
      <Route path="/success" element={<PaymentSuccess />} />
      <Route path="/cancel" element={<PaymentCancel />} />
    </Routes>
  );
};

export default AppRoutes;