import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:IS_PED_RUNNING
 *
 * 0x24433628C02BED5F

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedRunning(ped: PedIndex): boolean {
	const isPedRunning_result = Citizen.invokeNative<boolean>('0x24433628C02BED5F', ped);
	return isPedRunning_result;
}