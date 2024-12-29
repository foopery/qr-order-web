import ProductDetailView from "./views/ProductDetailView.tsx";
import { useParams } from "react-router-dom";
import { productQuery } from "../_core/product.query.ts";
import ProductDetailErrorView from "./views/ProductDetailErrorView.tsx";
import ProductDetailLoadingView from "./views/ProductDetailLoadingView.tsx";

export default function ProductDetail() {
  const param = useParams();
  const id = Number(param.id);
  const { data, status } = productQuery.useGet(id);

  switch (status) {
    case "error":
      return <ProductDetailErrorView />;
    case "pending":
      return <ProductDetailLoadingView />;
    case "success":
      return <ProductDetailView data={data} />;
    default:
      return null;
  }
}
