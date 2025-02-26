import { createQueryKeys } from "@lukemorales/query-key-factory";
import { fetchProductsList, FetchProductsListArgs } from "../productService";

export const products = createQueryKeys("products", {
  search: (filters: FetchProductsListArgs) => ({
    queryKey: [filters],
    queryFn: () => fetchProductsList({ ...filters }),
  }),
});
