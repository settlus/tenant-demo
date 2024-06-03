type Info = {
  price: number | null,
  name: string | null,
}

type Data = {
  'on-chain': any,
  'off-chain': any,
}

const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

async function getBase64Image(file: string) {
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

export async function mintNFT(){

  await delay(2000);
  return;
}

export async function createItem(info: Info, thumbnail: string, file:string){
  const base64Thumbnail = await getBase64Image(thumbnail);
  const base64Template = await getBase64Image(file);
  const item = JSON.stringify({
    ...info,
    thumbnail: base64Thumbnail,
    template: base64Template,
  });
  sessionStorage.setItem('itemInfo',item);
}

export function getItem(){
  const raw = sessionStorage.getItem('itemInfo');
  const result = raw ? JSON.parse(raw) : null;
  return result;
}

export async function transferNFT(offer: any){
  const prev = sessionStorage.getItem('nftArr') || '[]';
  const arr = JSON.parse(prev);

  if(offer.itemIndex<arr.length) arr.splice(offer.itemIndex, 1);
  sessionStorage.setItem('nftArr',JSON.stringify(arr));

  await delay(2000);
  return;
}

export async function getData(): Promise<Data>{
  const data = sessionStorage.getItem('nftArr') || '[]';
  const arr = JSON.parse(data);

  return arr.map((item: any)=>{
    return {
      thumbnail: item.thumbnail,
      title: item.name,
      history: [
        {
          'Activity': 'Create NFT',
          'Txn Hash': 'E26338147DDB50C8ED191ED248D8A2D6471E68B2A91A74050ED3913603EB0855',
        },
        {
          'Activity': 'NFT Transfer',
          'Txn Hash': 'E26338147DDB50C8ED191ED248D8A2D6471E68B2A91A74050ED3913603EB0855',
        },
      ],
      details: {
        'Contact Address':'0x72f223423984723649823782374982392e9',
        'Token ID': '',
        'Token Standard': 'ERC-721',
        'Chain': 'Settlus',
        'Creator ID': '',
        'Owner ID': '',
      },
      revenue: {
        'Price': parseInt(item.price,10),
        'Quantity': 0,
        'Total Sales Revenue': 0,
      },

    }
  });
  

  // return {
  //   'on-chain': [
  //     {
  //       image: 'https://s3-alpha-sig.figma.com/img/6609/e013/76a570cb1fffbeed1b83e1c25f369ab9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TY0xh0Fh8a0Ja8-tQnl~jtOlhiTjJcuGsYvR1GKYab58pYXARqhmIK1WztYNbuOLXUKLzGasYM7fU3BfNou4WxvcvuMpSjwsAKeYTmD2cpd45~YQFniG5JNeqUygrJi5Ka1MVYwfb6uUVU-H4jGnmpTFO~PWhRAiPcmEQTR1So00lHanLZw6O9WMjlKnn5HRF9fMKxuNQG6ombceA7sP7UljHSd32RHsY8Pb03VtcHpznfej-D35l5AULY-TD5celk2XTmcYeBja-YFae9COMvYJcGbrTcrCNsDq7tisZ4F~5znW8XD~JF~7xnQ-Zsi0GtFu1DEDQr3Yb8nlABl~7Q__',
  //       itemImage:  'https://s3-alpha-sig.figma.com/img/6609/e013/76a570cb1fffbeed1b83e1c25f369ab9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TY0xh0Fh8a0Ja8-tQnl~jtOlhiTjJcuGsYvR1GKYab58pYXARqhmIK1WztYNbuOLXUKLzGasYM7fU3BfNou4WxvcvuMpSjwsAKeYTmD2cpd45~YQFniG5JNeqUygrJi5Ka1MVYwfb6uUVU-H4jGnmpTFO~PWhRAiPcmEQTR1So00lHanLZw6O9WMjlKnn5HRF9fMKxuNQG6ombceA7sP7UljHSd32RHsY8Pb03VtcHpznfej-D35l5AULY-TD5celk2XTmcYeBja-YFae9COMvYJcGbrTcrCNsDq7tisZ4F~5znW8XD~JF~7xnQ-Zsi0GtFu1DEDQr3Yb8nlABl~7Q__',
  //       title: 'Title',
  //       history: [
  //         {
  //           'Activity': 'Create NFT',
  //           'Txn Hash': 'E26338147DDB50C8ED191ED248D8A2D6471E68B2A91A74050ED3913603EB0855',
  //         },
  //         {
  //           'Activity': 'NFT Transfer',
  //           'Txn Hash': 'E26338147DDB50C8ED191ED248D8A2D6471E68B2A91A74050ED3913603EB0855',
  //         },
  //       ],
  //       details: {
  //           'Contact Address':'0x72f223423984723649823782374982392e9',
  //           'Token ID': '',
  //           'Token Standard': 'ERC-721',
  //           'Chain': 'Settlus',
  //           'Creator ID': '',
  //           'Owner ID': '',
  //       }
  //     },
  //     {
  //       image: 'https://s3-alpha-sig.figma.com/img/6609/e013/76a570cb1fffbeed1b83e1c25f369ab9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TY0xh0Fh8a0Ja8-tQnl~jtOlhiTjJcuGsYvR1GKYab58pYXARqhmIK1WztYNbuOLXUKLzGasYM7fU3BfNou4WxvcvuMpSjwsAKeYTmD2cpd45~YQFniG5JNeqUygrJi5Ka1MVYwfb6uUVU-H4jGnmpTFO~PWhRAiPcmEQTR1So00lHanLZw6O9WMjlKnn5HRF9fMKxuNQG6ombceA7sP7UljHSd32RHsY8Pb03VtcHpznfej-D35l5AULY-TD5celk2XTmcYeBja-YFae9COMvYJcGbrTcrCNsDq7tisZ4F~5znW8XD~JF~7xnQ-Zsi0GtFu1DEDQr3Yb8nlABl~7Q__',
  //       itemImage:  'https://s3-alpha-sig.figma.com/img/6609/e013/76a570cb1fffbeed1b83e1c25f369ab9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TY0xh0Fh8a0Ja8-tQnl~jtOlhiTjJcuGsYvR1GKYab58pYXARqhmIK1WztYNbuOLXUKLzGasYM7fU3BfNou4WxvcvuMpSjwsAKeYTmD2cpd45~YQFniG5JNeqUygrJi5Ka1MVYwfb6uUVU-H4jGnmpTFO~PWhRAiPcmEQTR1So00lHanLZw6O9WMjlKnn5HRF9fMKxuNQG6ombceA7sP7UljHSd32RHsY8Pb03VtcHpznfej-D35l5AULY-TD5celk2XTmcYeBja-YFae9COMvYJcGbrTcrCNsDq7tisZ4F~5znW8XD~JF~7xnQ-Zsi0GtFu1DEDQr3Yb8nlABl~7Q__',
  //       title: 'Title',
  //       history: [
  //         {
  //           'Activity': 'Create NFT',
  //           'Txn Hash': 'E26338147DDB50C8ED191ED248D8A2D6471E68B2A91A74050ED3913603EB0855',
  //         },
  //       ],
  //       details: {
  //           'Contact Address':'0x72f223423984723649823782374982392e9',
  //           'Token ID': '',
  //           'Token Standard': 'ERC-721',
  //           'Chain': 'Settlus',
  //           'Creator ID': '',
  //           'Owner ID': '',
  //       }
  //     },
  //   ],
  //   'off-chain': [
  //     {
  //       image: 'https://s3-alpha-sig.figma.com/img/6609/e013/76a570cb1fffbeed1b83e1c25f369ab9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TY0xh0Fh8a0Ja8-tQnl~jtOlhiTjJcuGsYvR1GKYab58pYXARqhmIK1WztYNbuOLXUKLzGasYM7fU3BfNou4WxvcvuMpSjwsAKeYTmD2cpd45~YQFniG5JNeqUygrJi5Ka1MVYwfb6uUVU-H4jGnmpTFO~PWhRAiPcmEQTR1So00lHanLZw6O9WMjlKnn5HRF9fMKxuNQG6ombceA7sP7UljHSd32RHsY8Pb03VtcHpznfej-D35l5AULY-TD5celk2XTmcYeBja-YFae9COMvYJcGbrTcrCNsDq7tisZ4F~5znW8XD~JF~7xnQ-Zsi0GtFu1DEDQr3Yb8nlABl~7Q__',
  //       title: 'Title',
  //       revenue: {
  //         'Price': 10,
  //         'Quantity': 0,
  //         'Total Sales Revenue': 0,
  //       },
  //     },
  //     {
  //       image: 'https://s3-alpha-sig.figma.com/img/6609/e013/76a570cb1fffbeed1b83e1c25f369ab9?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TY0xh0Fh8a0Ja8-tQnl~jtOlhiTjJcuGsYvR1GKYab58pYXARqhmIK1WztYNbuOLXUKLzGasYM7fU3BfNou4WxvcvuMpSjwsAKeYTmD2cpd45~YQFniG5JNeqUygrJi5Ka1MVYwfb6uUVU-H4jGnmpTFO~PWhRAiPcmEQTR1So00lHanLZw6O9WMjlKnn5HRF9fMKxuNQG6ombceA7sP7UljHSd32RHsY8Pb03VtcHpznfej-D35l5AULY-TD5celk2XTmcYeBja-YFae9COMvYJcGbrTcrCNsDq7tisZ4F~5znW8XD~JF~7xnQ-Zsi0GtFu1DEDQr3Yb8nlABl~7Q__',
  //       title: 'Title',
  //       revenue: {
  //         'Price': 100,
  //         'Quantity': 0,
  //         'Total Sales Revenue': 0,
  //       },
  //     },
      
  //   ]
    
    
  // }

}