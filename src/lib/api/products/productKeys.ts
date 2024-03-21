import { FetchProductsListArgs } from "./productService";

export const productKeys = {
  all: [{ scope: "products" }] as const,
  getOne: (id: string) => [{ ...productKeys.all[0], entity: id }] as const,
  search: (params: FetchProductsListArgs) =>
    [{ ...productKeys.all[0], ...params }] as const,
};
