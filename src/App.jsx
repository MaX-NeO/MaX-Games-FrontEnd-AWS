import Header from "./components/header";
import { Routes, Route, Outlet } from 'react-router-dom';
import { Suspense, lazy } from "react";
import Loader from "./components/loader";
import { UserAuth } from "./pages/Client/Auth/UserAuth";
import { AdminAuth } from "./pages/Admin/Auth/AdminAuth";

const Home = lazy(() => loading(2500).then(() => import("./pages/Home")))
const Games = lazy(() => loading(2500).then(() => import("./pages/Games")))
const Events = lazy(() => loading(2500).then(() => import("./pages/Events")))
const Login = lazy(() => loading(2500).then(() => import("./pages/Login")))
const Register = lazy(() => loading(2500).then(() => import("./pages/Register")))
const GameViewPage = lazy(() => loading(2500).then(() => import("./pages/Game")))
const GameCategories = lazy(() => loading(2500).then(() => import("./pages/GameCategories")))
const AdminLogin = lazy(() => loading(2500).then(() => import("./pages/Admin/AdminLogin")))
const Dashboard = lazy(() => import("./pages/Client/Dashboard"))
const Addgame = lazy(() => import("./pages/Client/Addgame"))
const Editgame = lazy(() => import("./pages/Client/Editgame"))
const AdminAddgame = lazy(() => import("./pages/Admin/AdminAddgame"))
const AdminEditGame = lazy(() => import("./pages/Admin/AdminEditgame"))
const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"))
const Error404 = lazy(() => import('./pages/Error404'))
function App() {
  return (
    <>
      <div className="Appx">
        <Suspense fallback={<Loader />}>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Games" element={<Games />} />
            <Route exact path="/Events" element={<Events />} />
            <Route exact path="/Game/:id" element={<GameViewPage />} />
            <Route exact path="/Game/categories/:gametype" element={<GameCategories />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
            {/* User Auth routes */}
            <Route element={<UserAuth/>}>
            <Route exact path="/dashboard/games" element={<Dashboard />} />
            <Route exact path="/dashboard/games/add" element={<Addgame />} />
            <Route exact path="/dashboard/games/edit/:id" element={<Editgame />} />
            </Route>
            {/* Admin Auth routes */}
            
            <Route exact path="/Admin/Login" element={<AdminLogin />} />
            <Route element={<AdminAuth/>}>
            <Route exact path="/Admin/dashboard" element={<AdminDashboard />} />
            <Route exact path="/Admin/games/add" element={<AdminAddgame />} />
            <Route exact path="/Admin/games/edit/:id" element={<AdminEditGame />} />
            </Route>
            {/* 404 */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Suspense>
      </div >
    </>
  );
}
const loading = (time) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}

export default App;
