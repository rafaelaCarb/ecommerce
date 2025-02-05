import { Product } from "../commons/product";
import { SearchService } from "./SearchService";

export class ProductService extends SearchService<Product> {

  constructor() {
    super('/products');
  }
}