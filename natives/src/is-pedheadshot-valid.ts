import { PedheadshotId } from '@ivanzaida/structures'

/**
 * PED:IS_PEDHEADSHOT_VALID
 *
 * 0xCF3FA9D6B87D2277

 * 
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedheadshotId} headshotId
 * @returns {boolean}  
 */
export function isPedheadshotValid(headshotId: PedheadshotId): boolean {
	const isPedheadshotValid_result = Citizen.invokeNative<boolean>('0xCF3FA9D6B87D2277', headshotId);
	return isPedheadshotValid_result;
}