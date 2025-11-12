import { PedheadshotId } from '@ivanzaida/structures'

/**
 * PED:GET_PEDHEADSHOT_TXD_STRING
 *
 * 0x008C0EB38E4459EE

 * 
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedheadshotId} headshotId
 * @returns {string}  
 */
export function getPedheadshotTxdString(headshotId: PedheadshotId): string {
	const getPedheadshotTxdString_result = Citizen.invokeNative<string>('0x008C0EB38E4459EE', headshotId);
	return getPedheadshotTxdString_result;
}