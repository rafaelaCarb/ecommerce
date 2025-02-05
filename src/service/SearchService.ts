import { Entity } from "../commons/form-data";
import { SearchRequest, SearchResponse } from "../commons/search";
import { api } from "../lib/axios";
import { BaseService } from "./BaseService";

export class SearchService<T extends Entity> extends BaseService<T> {

  public search = async (request: SearchRequest): Promise<SearchResponse<T>> => {
    try {
      return (await api.post(`${this.url}/search`, request)).data;
    } catch (err: any) {
      return err.response;
    }
  }

}