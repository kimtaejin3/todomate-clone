import { RecoilRoot } from "recoil";
import Feed from "./Feed";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Feed />
      </div>
    </RecoilRoot>
  );
}

export default App;
