import axios, { AxiosInstance, AxiosResponse } from "axios"
// http://127.0.0.1:8000 https://albatrossultrail.com
const BASE_URL = 'https://albatrossultrail.com/api'

export interface RaceCategory{
    ID: number,
    CategoryName: string,
    Label: string
}

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

export const RaceCategoryService = {
    getRaceCategories: async (): Promise<RaceCategory[]> => {
      const response: AxiosResponse<RaceCategory[]> = await api.get('/GetAllRaceCategories');
      return response.data;
    },
  };
  
export default RaceCategoryService;

