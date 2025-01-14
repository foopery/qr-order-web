import React from "react";
import Product from "./src/pages/Product.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./src/pages/ProductDetail.tsx";
import Cart from "./src/pages/Cart.tsx";

export default function Router() {
  const routers: { path: string; element: React.ReactNode; key: string }[] = [
    {
      path: "/", // 상품목록 페이지
      element: <Product />,
      key: "product",
    },
    {
      path: "/product/:id", // 상품 상세페이지
      element: <ProductDetail />,
      key: "product/detail/:id",
    },
    {
      path: "/cart", // 장바구니 페이지
      element: <Cart />,
      key: "cart",
    },
  ];
  return (
    <BrowserRouter>
      <Routes>
        {routers.map(({ path, element, key }) => (
          <Route path={path} element={element} key={key} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
