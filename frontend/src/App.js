import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponents";

//Protected users pages
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";

//Protected admin pages
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminCreateProductPage from "./pages/admin/AdminCreateProductPage";
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import AdminEditUserPage from "./pages/admin/AdminEditUserPage";
import AdminOrdersDetailsPage from "./pages/admin/AdminOrdersDetailsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/product-list" element={<ProductListPage />}></Route>
        <Route path="/product-details" element={<ProductDetailsPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>

        <Route path="*" element="Page not found 404"></Route>

        {/* User protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />}></Route>
          <Route path="/user/my-orders" element={<UserOrdersPage />}></Route>
          <Route
            path="/user/cart-details"
            element={<UserCartDetailsPage />}
          ></Route>
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          ></Route>
        </Route>

        {/* Admin protected routes: */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUsersPage />}></Route>
          <Route
            path="/admin/edit-user"
            element={<AdminEditUserPage />}
          ></Route>
          <Route path="/admin/products" element={<AdminProductsPage />}></Route>
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          ></Route>
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          ></Route>
          <Route path="/admin/orders" element={<AdminOrdersPage />}></Route>
          <Route
            path="/admin/order-details"
            element={<AdminOrdersDetailsPage />}
          ></Route>
          <Route path="/admin/chats" element={<AdminChatsPage />}></Route>
          <Route
            path="/admin/analytics"
            element={<AdminAnalyticsPage />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
