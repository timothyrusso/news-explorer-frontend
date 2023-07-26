import { apiKey, BASE_URL, pageSize } from './constants';

const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const getNewsInfo = ({ search }: { search: string }) => {
  return fetch(
    `${BASE_URL}?q=${search}&sortBy=publishedAt&language=en&pageSize=${pageSize}&apiKey=${apiKey}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then(checkResponse);
};
