const host = 'https://api.thecatapi.com/v1/images';

export const URL: string = `${host}/search?limit=15`;

export const getConfig = () => {
  return {
    timeout: 2000,
    headers: {
      'x-api-key':
        'live_iR6cvS1DmNTdZlG2BFdvYKy1dQYpTcRf7Zo0TNlLd2lSn72XXDZcPvXO755EvlHZ',
      'Content-Type': 'application/json',
    },
  };
};