import { PedheadshotId } from '@ivanzaida/structures'

/**
 * PED:IS_PEDHEADSHOT_READY
 *
 * 0x445B6F53EA9E6A6F

 * 
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedheadshotId} headshotId
 * @returns {boolean}  
 */
export function isPedheadshotReady(headshotId: PedheadshotId): boolean {
	const isPedheadshotReady_result = Citizen.invokeNative<boolean>('0x445B6F53EA9E6A6F', headshotId);
	return isPedheadshotReady_result;
}