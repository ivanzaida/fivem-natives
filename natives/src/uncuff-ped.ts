import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:UNCUFF_PED
 *
 * 0x5C47299F055D05B5

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function uncuffPed(ped: PedIndex): void {
	const uncuffPed_result = Citizen.invokeNative<void>('0x5C47299F055D05B5', ped);
	return uncuffPed_result;
}