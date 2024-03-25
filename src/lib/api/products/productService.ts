import { apiClient } from "../../apiClient";
import { PaginatedProducts } from "../@types/products";

export interface FetchProductsListArgs {
  limit?: number;
  skip?: number;
  search?: string;
}

export const fetchProductsList = async ({
  limit,
  skip,
  search,
}: FetchProductsListArgs = {}) => {
  const { data } = await apiClient.get<PaginatedProducts>("/products/search", {
    params: {
      limit,
      skip,
      q: search,
    },
  });

  return data;
};
