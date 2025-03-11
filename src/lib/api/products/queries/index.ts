import { mergeQueryKeys } from "@lukemorales/query-key-factory";
import { products } from "./products";

export const queries = mergeQueryKeys(products);
