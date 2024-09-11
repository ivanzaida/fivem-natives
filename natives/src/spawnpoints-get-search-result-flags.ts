import { IntRef } from '@ivanzaida/structures'

/**
 * PED:SPAWNPOINTS_GET_SEARCH_RESULT_FLAGS
 *
 * 0xD0905E590E711B1A

 * 
 * ------------------------------------------------------------------
 * @param {number} result
 * @param {IntRef} outFlags [Ref]
 */
export function spawnpointsGetSearchResultFlags(result: number, outFlags: IntRef /* ptr */): void {
	const spawnpointsGetSearchResultFlags_result = Citizen.invokeNative<void>('0xD0905E590E711B1A', result, outFlags.dataView);
	return spawnpointsGetSearchResultFlags_result;
}