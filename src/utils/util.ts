export const formatNum = (value: number)=>{
  return value.toLocaleString('en-US', { 
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}