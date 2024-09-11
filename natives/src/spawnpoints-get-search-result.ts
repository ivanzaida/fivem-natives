import { FloatRef } from '@ivanzaida/structures'

/**
 * PED:SPAWNPOINTS_GET_SEARCH_RESULT
 *
 * 0x47B485915DC62445

 * 
 * ------------------------------------------------------------------
 * @param {number} result
 * @param {FloatRef} outX [Ref]
 * @param {FloatRef} outY [Ref]
 * @param {FloatRef} outZ [Ref]
 */
export function spawnpointsGetSearchResult(result: number, outX: FloatRef /* ptr */, outY: FloatRef /* ptr */, outZ: FloatRef /* ptr */): void {
	const spawnpointsGetSearchResult_result = Citizen.invokeNative<void>('0x47B485915DC62445', result, outX.dataView, outY.dataView, outZ.dataView);
	return spawnpointsGetSearchResult_result;
}