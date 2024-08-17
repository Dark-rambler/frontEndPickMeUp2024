import { useState } from 'react';

const useApiClient = () => {
  const baseURL = process.env.BASE_API_URL as string;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = async (endpoint: string, options = {}) => {
    const url = `http://localhost:8085/pickMeUp/v1${endpoint}`;
    setLoading(true);
    setError(null);

    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const config = {
      ...defaultOptions,
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error en la petición');
      }

      return data;
    } catch (error: any) {
      console.error('Error en la petición:', error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const get = (endpoint: string, options = {}) => {
    return request(endpoint, { ...options, method: 'GET' });
  };

  const post = (endpoint: string, body: any, options = {}) => {
    return request(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) });
  };

  const put = (endpoint: string, body: any, options = {}) => {
    return request(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) });
  };

  return { get, post, put, loading, error };
};

export default useApiClient;
