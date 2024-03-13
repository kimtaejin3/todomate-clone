import { RecoilRoot } from "recoil";
import Feed from "./pages/Feed";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddGoal from "./pages/AddGoal";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/goal" element={<AddGoal />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
