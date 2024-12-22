import { useInfiniteQuery } from "@tanstack/react-query";
import { productApi } from "./product.api";
import { IApiResponse, IProductPublicFindListResponse } from "../_interface/product.interface";

export const productQuery = {
  useGets: function () {
    return useInfiniteQuery<IProductPublicFindListResponse<IApiResponse[]>, Error>({
      queryKey: ["products"],
      queryFn: ({ pageParam = 1 }) => productApi.gets(String(pageParam)),
      getNextPageParam: (lastPage) => {
        const currentPage = lastPage.meta.currentPage;
        const totalPage = lastPage.meta.totalPage;
        return currentPage! < totalPage! ? currentPage! + 1 : undefined;
      },
      initialPageParam: 1,
    });
  },
};
