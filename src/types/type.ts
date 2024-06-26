export type InfoType = {
  price: number | null,
  name: string | null,
}

export type DetailType = {
  'Contract Address': string,
  'Mint Hash': string,
  'Token ID': string,
  'Token Standard': string,
  'Chain': string,
  'Creator': string,
  'Owner': string,
}

export type DetailKeys = keyof DetailType;

export type DataType = {
  thumbnail: string,
  title: string,
  history: {
    'Profile'?: string,
    'Activity': string,
    'Time': string,
  }[],
  details: DetailType,
  revenue: {
    'Price': number,
    'Quantity': number,
  },

}

export type OfferType = {
  itemIndex: number,
  offerAddress: string,
  offerPrice: number,
} | null;

export type itemType = {
  thumbnailPng: string,
  meshName: string,
  templatePng: string,
  title: string, 
  price: number, 
  creator: string, 
  creatorProfilePng: string, 
  quantity: number,
  offerValue: number,
  userCreated?: boolean,
}