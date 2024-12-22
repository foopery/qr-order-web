import ProductView from "./views/ProductView";
import { productQuery } from "./_core/product.query";
import ProductLoadingView from "./views/ProductLoadingView";
import ProductErrorView from "./views/ProductErrorView";

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
