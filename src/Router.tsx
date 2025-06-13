import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout/indes";
import { ConclusaoPedido } from "./pages/ConclusaoPedido";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/conclusao" element={<ConclusaoPedido />} />
      </Route>
    </Routes>
  );
}
