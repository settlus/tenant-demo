const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

type Info = {
  price: string | null,
  name: string | null,
}

export async function mintNFT(file: File | null, info: Info){
  await delay(2000);
  return;
}