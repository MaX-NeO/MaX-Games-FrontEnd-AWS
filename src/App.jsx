import Header from "./components/header";
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Games from "./pages/Games";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Register from "./pages/Register";
import GameViewPage from "./pages/Game";
import Dashboard from "./pages/Admin/Dashboard";
import Addgame from "./pages/Admin/Addgame";
import Editgame from "./pages/Admin/Editgame";
import GameCategories from "./pages/GameCategories";

function App() {
  return (
    <>
      <div className="Appx">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Games" element={<Games/>}/>
          <Route exact path="/Events" element={<Events/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Register" element={<Register/>}/>
          <Route exact path="/Game/:id" element={<GameViewPage/>}/>
          <Route exact path="/Game/categories/:gametype" element={<GameCategories/>}/>
          
          {/* Auth routes */}
          <Route exact path="/dashboard/games" element={<Dashboard/>}/>
          <Route exact path="/dashboard/games/add" element={<Addgame/>}/>
          <Route exact path="/dashboard/games/edit/:id" element={<Editgame/>}/>
        </Routes>
      </div >
    </>
  );
}

export default App;
