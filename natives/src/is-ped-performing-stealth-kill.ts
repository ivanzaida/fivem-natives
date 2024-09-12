import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_PERFORMING_STEALTH_KILL
 *
 * 0x729CB628AF931FC1

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedPerformingStealthKill(ped: PedIndex): boolean {
	const isPedPerformingStealthKill_result = Citizen.invokeNative<boolean>('0x729CB628AF931FC1', ped);
	return isPedPerformingStealthKill_result;
}