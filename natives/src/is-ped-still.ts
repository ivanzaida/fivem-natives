import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_STILL
 *
 * 0x6CDEFB59235A1FD9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedStill(ped: PedIndex): boolean {
	const isPedStill_result = Citizen.invokeNative<boolean>('0x6CDEFB59235A1FD9', ped);
	return isPedStill_result;
}