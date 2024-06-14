export const formatNum = (value: number)=>{
  if(typeof value !='number') return '$1,000';
  return value.toLocaleString('en-US', { 
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}