export type InfoType = {
  price: number | null,
  name: string | null,
}

export type DataType = {
  thumbnail: string,
  title: string,
  history: {
    'Profile'?: string,
    'Activity': string,
  }[],
  details: {
    'Contact Address': string,
    'Token ID': string,
    'Token Standard': string,
    'Chain': string,
    'Creator ID': string,
    'Owner ID': string,
  },
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
