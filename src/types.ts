export interface Image {
  alt_description: string;
  id: string;
  urls: { small: string; regular: string };
}
interface Data {
  results: Image[];
  total: number;
  total_pages: number;
}
export interface Response {
  data: Data;
}
