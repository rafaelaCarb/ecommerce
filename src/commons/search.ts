export enum FilterType {
  EQUALS = 'EQUALS',
  NOT_EQUALS = 'NOT_EQUALS',
  LIKE = 'LIKE',
  NOT_LIKE = 'NOT_LIKE',
  GREATER = 'GREATER',
  LESS = 'LESS',
  GREATER_EQUALS = 'GREATER_EQUALS',
  LESS_EQUALS = 'LESS_EQUALS',
  IN = 'IN',
  NOT_IN = 'NOT_IN',
  IS_NULL = 'IS_NULL',
  IS_NOT_NULL = 'IS_NOT_NULL',
  BETWEEN = 'BETWEEN'
}

export enum SortType {
  ASC, DESC
}

export interface SearchFilter {
  field: string;
  value: unknown;
  type: FilterType;
}

export interface SearchSort {
  field: string;
  type: SortType;
}

export interface SearchRequest {
  filters?: SearchFilter[];
  sort?: SearchSort;
  page?: number;
  rows?: number;
}

export interface SearchResponse<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  size: number;
  number: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  empty: boolean;
}