export interface IApiResponse {
  id: number;
  state: 1 | 2;
  name: string;
  thumbnailUrl: string;
  content: string;
  mainPrice: string;
  discountPrice: string;
  isDiscount: boolean;
  quantity: number;
  isQuantity: boolean;
  createdAt: string;
  updatedAt: string | null;
}

export interface IMetaData {
  currentPage: number | null;
  currentLimit: number | null;
  totalPage: number | null;
  totalCount: number;
}

export interface IProductPublicFindListResponse<T> {
  data: T;
  meta: IMetaData;
  message: string;
  code: number;
}
