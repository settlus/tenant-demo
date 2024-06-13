import './init';
//import {fromIni} from '@aws-sdk/credential-providers';
import {S3Client} from '@aws-sdk/client-s3';
import {Upload} from '@aws-sdk/lib-storage';

const S3_BUCKET = 'settlus-tenant-demo-dev';
const S3_REGION = 'ap-northeast-2'
const ENV = import.meta.env;

//const awsConfig = fromIni();
const s3client = new S3Client({region:S3_REGION,credentials:{
  accessKeyId: ENV.VITE_AWS_ACCESS_KEY_ID,
  secretAccessKey: ENV.VITE_AWS_SECRET_ACCESS_KEY,
}});

export async function uploadToS3(filename: string, file: File){
  const params = {
    Bucket: S3_BUCKET,
    Key: filename,
    Body: file,
  }

  const upload = new Upload({
    client: s3client, params: params
  })

  await upload.done()
    .then(_ => console.log(`${S3_BUCKET}/${filename}`))
    .catch(e => {
      console.error("unable to upload", e);
    })

  return `https://${S3_BUCKET}.s3.${s3client.config.region}.amazonaws.com/${file.name}`;
}
