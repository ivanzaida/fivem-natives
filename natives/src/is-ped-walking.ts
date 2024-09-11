import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_WALKING
 *
 * 0x0A11073DD28E2CD9

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedWalking(ped: PedIndex): boolean {
	const isPedWalking_result = Citizen.invokeNative<boolean>('0x0A11073DD28E2CD9', ped);
	return isPedWalking_result;
}