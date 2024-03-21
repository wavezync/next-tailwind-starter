import { useQuery } from "@tanstack/react-query";

import { productKeys } from "../productKeys";
import { CommonQueryOptions } from "@/src/lib/common/queryOptions";
import { fetchProductsList } from "../productService";

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
