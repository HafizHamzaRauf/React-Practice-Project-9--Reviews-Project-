import { Route, Routes } from "react-router-dom";
import Review from "./pages/Review";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Review></Review>}></Route>
    </Routes>
  );
}
export default App;
