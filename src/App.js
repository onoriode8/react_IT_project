import { Routes, Route } from "react-router-dom"

import Home from "./components/pages/home/home";
// import Buy from './components/pages/buy/buy';
import Toolbar from './components/toolbar/toolbar';

import Context from "./hooks/context";

import AsyncComponent from "./container/lazyUI/asyncComponent";

const BuyAsync = AsyncComponent(() => import('./components/pages/buy/buy'))

function App() {

  return (
    <div>
      <Context>
        <Toolbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<BuyAsync />} />
        </Routes>
       </Context>
    </div>
  );
}

export default App;
