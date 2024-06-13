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

export function getTimeString(date: Date,addSec?:number){
  
}