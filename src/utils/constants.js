export const apiKey = "695064ce7e354fa982d3bae257a13646";

export const BASE_URL = "https://nomoreparties.co/news/v2/everything";

const date = new Date();
export const currentDate =
  date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
export const beforeCurrentDate =
  date.getFullYear() + "-" + date.getMonth() + "-" + (date.getDate() - 7);
export const pageSize = 100;
