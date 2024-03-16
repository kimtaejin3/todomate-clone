import { RecoilRoot } from "recoil";
import Feed from "./pages/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddGoal from "./pages/AddGoal";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/goal" element={<AddGoal />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
