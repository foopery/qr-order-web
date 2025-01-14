import { apiInstance } from "../../../_common/axios-api.instance.ts";
import { IProductModel, IProductPublicFindListResponse, IProductPublicFindResponse } from "../_interface/product.interface.ts";

export const productApi = {
  gets: async function (page: string) {
    const { data } = await apiInstance.get<IProductPublicFindListResponse<IProductModel[]>>("/products", {
      params: {
        limit: "10",
        page,
        sort: "CREATED_AT:ASC",
      },
    });
    return data;
  },

  get: async function (id: number) {
    const { data } = await apiInstance.get<IProductPublicFindResponse<IProductModel>>(`/products/${id}`);
    return data;
  },
};
