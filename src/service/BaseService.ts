import { Entity } from "../commons/form-data";
import { api } from "../lib/axios";

export abstract class BaseService<T extends Entity> {

  private readonly _url: any;

  constructor(url: any) {
    this._url = url;
  }

  get url() {
    return this._url;
  }

  /**
   * Função para salvar um objeto
   * @param obj - Recebe um objeto do tipo T
   * @returns - Retorna uma Promise com a resposta da API
   **/
  public save = async (obj: T): Promise<any> => {
    let response;
    try {
      response = await api.post(this._url, obj);
    } catch (err: any) {
      response = err.response;
    }
    return response;
  };

  /**
   * Função para atualizar um objeto
   * @param obj - Recebe um objeto do tipo T
   * @returns - Retorna uma Promise com a resposta da API
   **/
  public update = async (obj: T): Promise<any> => {
    let response;
    try {
      response = await api.put(`${this._url / obj?.id}`, obj);
    } catch (err: any) {
      response = err.response;
    }
    return response;
  };

  /**
   * Função para atualizar um objeto
   * @param id - Recebe o id do objeto que será atualizado
   * @returns - Retorna uma Promise com a resposta da API
   */
  public remove = async (id: number): Promise<any> => {
    let response;
    try {
      response = await api.delete(`${this._url}/${id}`);
    } catch (err: any) {
      response = err.response;
    }
    return response;
  };

  /**
   * Função para buscar um objeto pelo id
   * @param id - Recebe o id do objeto que será buscado
   * @returns - Retorna uma Promise com a resposta da API
   */
  public findById = async (id: number): Promise<any> => {
    let response;
    try {
      response = await api.get(`${this._url}/${id}`);
    } catch (err: any) {
      response = err.response;
    }
    return response;
  };
}