import React from "react";
import Product from "./src/components/product/gets/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./src/components/product/detail/ProductDetail.tsx";

export default function Router() {
  const routers: { path: string; element: React.ReactNode; key: string }[] = [
    {
      path: "/", // 상품목록 페이지
      element: <Product />,
      key: "product",
    },
    {
      path: "/product/detail/:id", // 상품 상세페이지
      element: <ProductDetail />,
      key: "product/detail/:id",
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
