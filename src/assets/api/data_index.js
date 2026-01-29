import packageData from './packageData';
import stayData from './stayData';
import ticketData from './ticketData';

export const allProducts = [...packageData, ...stayData, ...ticketData];
export { packageData, stayData, ticketData };
