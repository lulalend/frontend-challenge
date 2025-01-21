const host = 'https://api.thecatapi.com/v1/images';

export const URL: string = `${host}/search?limit=15`;

export const getConfig = () => {
  return {
    timeout: 2000,
    headers: {
      'x-api-key':
        'my_key',
      'Content-Type': 'application/json',
    },
  };
};
