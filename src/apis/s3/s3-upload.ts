import './init';
//import {fromIni} from '@aws-sdk/credential-providers';
import {S3Client} from '@aws-sdk/client-s3';
import {Upload} from '@aws-sdk/lib-storage';

const ENV = import.meta.env;
const S3_BUCKET = ENV.VITE_S3_BUCKET;
const S3_REGION = 'ap-northeast-2'


//const awsConfig = fromIni();
const s3client = new S3Client({region:S3_REGION,credentials:{
  accessKeyId: ENV.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: ENV.VITE_AWS_SECRET_ACCESS_KEY,
}});

async function uploadToS3(type: string, file: File | Buffer, fileName: string, contentType:string){
  const params = {
    Bucket: S3_BUCKET,
    Key: `${type}/${fileName}`,
    Body: file,
    contentType: contentType,
  }

  const upload = new Upload({
    client: s3client, params: params
  })

  await upload.done()
    .then(_ => console.log(`${S3_BUCKET}/${fileName}`))
    .catch(e => {
      console.error("unable to upload", e);
    })

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