import axios, { AxiosInstance, AxiosResponse } from "axios"
// http://127.0.0.1:8000 https://albatrossultrail.com
const BASE_URL = 'http://127.0.0.1:8000/api'

const api: AxiosInstance  = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
});

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('auth_token');
    if(token)
    {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})

export const Registration = {
    save: async (model: any): Promise<any> => {
      const response: AxiosResponse<any> = await api.post('/Registration',  model);
      return response.data;
    },
  };
  
export default Registration;

