import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_USING_ACTION_MODE
 *
 * 0x1072B16512C86D96

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedUsingActionMode(ped: PedIndex): boolean {
	const isPedUsingActionMode_result = Citizen.invokeNative<boolean>('0x1072B16512C86D96', ped);
	return isPedUsingActionMode_result;
}