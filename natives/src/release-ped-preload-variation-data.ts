import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RELEASE_PED_PRELOAD_VARIATION_DATA
 *
 * 0x30325AB568E2F2EF

 * 
 * Note that variation data set with SET_PED_PRELOAD_VARIATION_DATA counts towards the script memory budget.
 * For this reason it is important to use this command to release these assets as soon as you don't need them anymore.
 * In fact, you can call this command as soon as you have set the same variation with SET_PED_COMPONENT_VARIATION
 * since at that point the assets will be rendered on the ped and have references to keep them in memory.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function releasePedPreloadVariationData(ped: PedIndex): void {
	const releasePedPreloadVariationData_result = Citizen.invokeNative<void>('0x30325AB568E2F2EF', ped);
	return releasePedPreloadVariationData_result;
}