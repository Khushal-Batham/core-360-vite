import type { AxiosRequestConfig } from 'axios';

import axios from 'axios';

export const fetcher = async (url: string, options?: AxiosRequestConfig) => {
  try {
    const response = await axios({ url, ...options });
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
