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
  return await apiClient
    .get<PaginatedProducts>("products/search", {
      searchParams: new URLSearchParams({
        limit: (limit ?? 10).toString(),
        skip: (skip ?? 0).toString(),
        q: search ?? "",
      }),
    })
    .json();
};
