export interface IProductModel {
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
  optionGroups: IProductData_Model[];
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

export interface IApiResponse {
  message: string;
  code: number;
}

export interface IProductPublicFindResponse<T> {
  data: T;
  message: string;
  code: number;
}

export interface IProductData_Model {
  id: number;
  productId: number;
  type: 1 | 2;
  title: string;
  createdAt: string;
  updatedAt: string | null;
  options: {
    id: number;
    groupId: number;
    value: string;
    createdAt: string;
    updatedAt: string | null;
  }[];
}
