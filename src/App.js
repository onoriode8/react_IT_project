import { Routes, Route } from "react-router-dom"

import Home from "./components/pages/home/home";
// import Buy from './components/pages/buy/buy';
import Toolbar from './components/toolbar/toolbar';

import Context from "./hooks/context";

import AsyncComponent from "./container/lazyUI/asyncComponent";

const BuyAsync = AsyncComponent(() => import('./components/pages/buy/buy'))

function App() {

  const styles = {marginTop: "7em"};

  return (
    <div>
      <Context>
        <Toolbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<BuyAsync />} />
            <Route path="/sell" element={<div style={styles}><h1>Sell</h1></div>} />
            <Route path="/rent" element={<div style={styles}><h1>Rent</h1></div>} />
            <Route path="/home_loans" element={<div style={styles}><h1>Home Loans</h1></div>} />
            <Route path="/mortgage_rent" element={<div style={styles}><h1>Mortgage Rent</h1></div>} />
        </Routes>
       </Context>
    </div>
  );
}

export default App;
