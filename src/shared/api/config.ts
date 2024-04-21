export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_APP_READ_ACCESS_TOKEN}`
  }
};