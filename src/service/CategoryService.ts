import { Category } from "../commons/category";
import { SearchService } from "./SearchService";

export class CategoryService extends SearchService<Category> {

  constructor() {
    super('/categories');
  }
}