import { useQuery } from "@tanstack/react-query";

import { productKeys } from "../productKeys";
import { fetchProductsList } from "../productService";
import { CommonQueryOptions } from "@/lib/common/queryOptions";

interface ProductQueryParams {
  search?: string;
  limit?: number;
  skip?: number;
}

export const useProductsQuery = (
  opts: ProductQueryParams = {},
  options?: CommonQueryOptions,
) =>
  useQuery({
    queryKey: productKeys.search(opts),
    queryFn: () => fetchProductsList(opts),
    ...options,
  });
