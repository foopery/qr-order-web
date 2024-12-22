import { apiInstance } from "../../../../_common/axios-api.instance";
import { IApiResponse, IProductPublicFindListResponse } from "../_interface/product.interface";

export const productApi = {
  gets: async function (page: string) {
    const { data } = await apiInstance.get<IProductPublicFindListResponse<IApiResponse[]>>("/products", {
      params: {
        limit: "10",
        page,
        sort: "CREATED_AT:DESC",
      },
    });
    return data;
  },
};
