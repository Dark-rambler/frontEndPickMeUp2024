
export class ApiClient <T> {
    private baseURL: string = process.env.BASE_API_URL as string;
  
    async request(endpoint:string, options = {}) {
      const url = `${this.baseURL}${endpoint}`;
      
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
      } catch (error) {
        console.error('Error en la petición:', error);
        throw error;
      }
    }
  
    get(endpoint:string, options = {}) {
      return this.request(endpoint, { ...options, method: 'GET' });
    }
  
    post(endpoint:string, body:T, options = {}) {
      return this.request(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) });
    }
  
    put(endpoint:string, body:T, options = {}) {
      return this.request(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) });
    }
  
    delete(endpoint:string, options = {}) {
      return this.request(endpoint, { ...options, method: 'DELETE' });
    }
  }
  
  export default ApiClient;
  