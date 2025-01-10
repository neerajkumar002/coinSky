import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home/Home";
import CryptoDetails from "./Pages/Crypto Details/CryptoDetails";
import TrendingCoins from "./Pages/Trending/TrendingCoins";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CryptoDetails />} />
          <Route path="/trending" element={<TrendingCoins />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
