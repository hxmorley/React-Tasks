
import './App.css';
import ItemCard from './components/items.jsx'
import itemsData from './itemsData.json'
import Navbar from "./Pages/NavBar";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCard from './components/ShopCard.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<ShopPage />} />
        </Routes>
        </main>
      </BrowserRouter>
      </div>
  );
}

export default App;
