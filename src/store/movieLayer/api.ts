import axios from "axios";

export async function listApi(
  format: string,
  listPage: number
): Promise<object> {
  const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
  const BASE_URL: string = "https://api.themoviedb.org/3/discover";
  const url: string = `${BASE_URL}/${format}?api_key=${API_KEY}&language=ru-RU&sort_by=popularity.desc&page=${listPage}`;

  const { page, results, total_pages, total_results }: any = await axios
    .get(url)
    .then((response: any) => response.data)
    .catch((error) => console.log(error));

  return { page, results, total_pages, total_results };
}

export async function detailApi(format:string, id:string): Promise<object> {
  const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
  const BASE_URL: string = "https://api.themoviedb.org/3";
  const url: string = `${BASE_URL}/${format}/${id}?api_key=${API_KEY}&language=ru-RU`;

  const results: any = await axios
    .get(url)
    .then((response: any) => response.data)
    .catch((error) => console.log(error));

  // console.log(results);

  return results;
}

export async function searchApi(query: string, queryPage: number): Promise<object> {
  const API_KEY: string | undefined = process.env.REACT_APP_API_KEY;
  const BASE_URL: string = "https://api.themoviedb.org/3";
  const url: string = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=ru-RU&query=${query}&page=${queryPage}`;

  const results: any = await axios
    .get(url)
    .then((response: any) => response.data)
    .catch((error) => console.log(error));

  // console.log(query);

  return results;
}