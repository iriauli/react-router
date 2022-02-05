import React from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "./components/Loading";

import { Navbar } from "./components/Navbar";
import { PageNotFound } from "./pages/PageNotFound";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { AllProducts } from "./pages/Products/AllProducts";
import { Women } from "./pages/Products/Women";
import { Men } from "./pages/Products/Men";
import { Kids } from "./pages/Products/Kids";
import { Users } from "./pages/Users";
import { UserDetails } from "./pages/UserDetails";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { AuthProvider } from "./utils/Auth";
import { RequireAuth } from "./utils/RequireAuth";

// lazy loading 'About' route
const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <div className="container-fluid">
      <div className="container">
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="about"
              element={
                <React.Suspense fallback={<Loading />}>
                  <About />
                </React.Suspense>
              }
            ></Route>
            <Route path="products" element={<Products />}>
              <Route index element={<AllProducts />} />
              <Route path="women" element={<Women />} />
              <Route path="men" element={<Men />} />
              <Route path="kids" element={<Kids />} />
            </Route>
            <Route path="users" element={<Users />} />
            <Route path="users/:userId" element={<UserDetails />} />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
