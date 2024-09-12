import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_GETTING_UP
 *
 * 0x0B3FC0E7676E79BF

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedGettingUp(ped: PedIndex): boolean {
	const isPedGettingUp_result = Citizen.invokeNative<boolean>('0x0B3FC0E7676E79BF', ped);
	return isPedGettingUp_result;
}