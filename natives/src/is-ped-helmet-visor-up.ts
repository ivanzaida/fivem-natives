import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_HELMET_VISOR_UP
 *
 * 0x99D9C76822DA4A29

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedHelmetVisorUp(ped: PedIndex): boolean {
	const isPedHelmetVisorUp_result = Citizen.invokeNative<boolean>('0x99D9C76822DA4A29', ped);
	return isPedHelmetVisorUp_result;
}