import './init';
import { Buffer } from 'buffer';
import axios from 'axios';

const ENV = import.meta.env;

async function uploadToS3(type: string, file: File | Buffer, fileName: string, contentType:string){
  axios.get(`${ENV.VITE_LAMBDA_API_PRESIGNED_URL}?bucket=${ENV.VITE_S3_BUCKET}&key=${type}/${fileName}`)
    .then((response)=>{
      const url = response.data;
      return axios.put(url,file,{ headers: { 'Content-Type': contentType, } })
    })
    .catch((err)=>console.error(err));

  return `https://${ENV.VITE_CLOUDFRONT_DOMAIN}/${type}/${fileName}`
}

export async function uploadImageToS3(file: File, sample?:number){
  const FILENAME = sample ? `sample${sample+1}.png` : file.name
  const result = await uploadToS3('images',file, FILENAME, 'image/png');
  return result;
}

export async function uploadJsonToS3(object: Buffer, fileName: string){
  const result = await uploadToS3('json',object, fileName, 'application/json');
  return result
}