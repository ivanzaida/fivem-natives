import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MAX_TIME_UNDERWATER
 *
 * 0x0ACCC8916441860A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} maxTime
 */
export function setPedMaxTimeUnderwater(ped: PedIndex, maxTime: number): void {
	const setPedMaxTimeUnderwater_result = Citizen.invokeNative<void>('0x0ACCC8916441860A', ped, maxTime);
	return setPedMaxTimeUnderwater_result;
}