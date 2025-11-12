import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:RELEASE_PED_PRELOAD_PROP_DATA
 *
 * 0xB736C2C734C35F54

 * 
 * Note that prop data set with SET_PED_PRELOAD_PROP_DATA counts towards the script memory budget.
 * For this reason it is important to use this command to release these assets as soon as you don't need them anymore.
 * In fact, you can call this command as soon as you have set the same prop with SET_PED_PROP_INDEX
 * since at that point the assets will be rendered on the ped and have references to keep them in memory.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function releasePedPreloadPropData(ped: PedIndex): void {
	const releasePedPreloadPropData_result = Citizen.invokeNative<void>('0xB736C2C734C35F54', ped);
	return releasePedPreloadPropData_result;
}