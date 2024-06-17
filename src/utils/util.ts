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