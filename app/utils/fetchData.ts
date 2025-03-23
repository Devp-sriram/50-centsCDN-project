import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv'
dotenv.config()

export async function fetchData(){
  try{
      const response : AxiosResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
      return response
  }catch(error: unknown){
      console.log(error);
  }
}
