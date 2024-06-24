import {S3Client, GetObjectCommand, PutObjectCommand} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const S3_BUCKET = 'settlus-tenant-demo-dev';
const S3_REGION = 'ap-northeast-2'


const s3 = new S3Client({region:S3_REGION,
//   credentials:{
//   accessKeyId: AWS_ACCESS_KEY_ID,
//   secretAccessKey: AWS_SECRET_ACCESS_KEY,
// }
});

export const handler = async (event, context, callback) => {
  //const request = JSON.parse(event.body);
  const { filename, type } = event;
  const command = new PutObjectCommand({Bucket: S3_BUCKET, Key: `${type}/${filename}`});
  const url = await getSignedUrl(s3, command, {expiresIn: 15*60});

  return url;
};