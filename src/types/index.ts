
export interface Competitor {
  link: string;
  snippet: string;
  title: string;
}

export interface SearchResponse {
  query: string;
  results: Competitor[];
  total_results?: number;
  limited_results?: boolean;
}

export interface CategoryOption {
  id: string;
  name: string;
  icon: string;
  description?: string;
}

export interface LocationOption {
  name: string;
  code: string;
  flag?: string;
}

export interface FormData {
  category: string;
  customCategory?: string;
  location: string;
  customLocation?: string;
  numResults?: number;
}
