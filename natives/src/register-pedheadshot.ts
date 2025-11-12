import { PedIndex, PedheadshotId } from '@ivanzaida/structures'

/**
 * PED:REGISTER_PEDHEADSHOT
 *
 * 0x5CF63381522A9972

 * 
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {PedheadshotId}  
 */
export function registerPedheadshot(ped: PedIndex): PedheadshotId {
	const registerPedheadshot_result = Citizen.invokeNative<PedheadshotId>('0x5CF63381522A9972', ped);
	return registerPedheadshot_result;
}