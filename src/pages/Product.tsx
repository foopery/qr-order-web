import ProductView from "../components/product/gets/views/ProductView.tsx";
import { productQuery } from "../components/product/_core/product.query.ts";
import ProductLoadingView from "../components/product/gets/views/ProductLoadingView.tsx";
import ProductErrorView from "../components/product/gets/views/ProductErrorView.tsx";

export default function Product() {
  const { data, status, fetchNextPage, hasNextPage, isFetchingNextPage } = productQuery.useGets();

  switch (status) {
    case "pending":
      return <ProductLoadingView />;
    case "error":
      return <ProductErrorView />;
    case "success":
      return <ProductView data={data.pages.flatMap((page) => page.data)} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} isFetchingNextPage={isFetchingNextPage} />;
    default:
      return null;
  }
}
