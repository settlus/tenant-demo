const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export async function mintNFT(){
  await delay(2000);
  return;
}