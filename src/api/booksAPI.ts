const API_ENDPOINT = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = ''; 

export const searchBooks = async (query: string, category: string, sortOrder: string, startIndex: number) => {
  let url = `${API_ENDPOINT}?q=${query}&key=${API_KEY}&startIndex=${startIndex}&maxResults=30`;

  if (category !== 'all') {
    url += `&subject:${category}`;
  }

  if (sortOrder) {
    url += `&orderBy=${sortOrder}`;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data.items; 
};
