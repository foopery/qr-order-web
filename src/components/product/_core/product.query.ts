import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { productApi } from "./product.api.ts";
import { IProductModel, IProductPublicFindListResponse } from "../_interface/product.interface.ts";

export const productQuery = {
  useGets: function () {
    return useInfiniteQuery<IProductPublicFindListResponse<IProductModel[]>, Error>({
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

  useGet: function (id: number) {
    return useQuery({
      queryKey: ["product"],
      queryFn: () => productApi.get(id),
      select: ({ data }) => data,
    });
  },
};
