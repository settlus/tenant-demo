export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function getBase64Image(file: string) {
  const response = await fetch(file);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);

    reader.onload = () => {
      resolve(reader.result); 
    };

    reader.onerror = (error) => {
      reject(error);
    };
  });
}

export async function convertToFile(url: string, nickname: string){
  const response = await fetch(url);
  const blob = await response.blob();
  const file = new File([blob],`${nickname}.png`,{type:blob.type});

  return file;
}

export const formatNum = (value: number)=>{
  if(typeof value !='number') return '$1,000';
  return value.toLocaleString('en-US', { 
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

export const formatTimeString = (isoString: string)=>{
  return isoString.slice(0,10)+' '+isoString.slice(11,19);
}

export const addTime = (dateString: string, addSec: number)=>{
  const ogDate = new Date(dateString);
  const ogTime = ogDate.getTime();
  const newTime = ogTime + (addSec*1000);
  const newDate = new Date(newTime);

  return formatTimeString(newDate.toISOString());
}