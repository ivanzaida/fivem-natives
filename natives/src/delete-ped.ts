import { IntRef } from '@ivanzaida/structures'

/**
 * PED:DELETE_PED
 *
 * 0x734A9F4537A31459

 * 
 * Deletes the specified ped, then sets the handle pointed to by the pointer to NULL.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} ped [Ref]
 */
export function deletePed(ped: IntRef /* ptr */): void {
	const deletePed_result = Citizen.invokeNative<void>('0x734A9F4537A31459', ped.dataView);
	return deletePed_result;
}