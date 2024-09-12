import { IntRef } from '@ivanzaida/structures'

/**
 * PHYSICS:DOES_ROPE_EXIST
 *
 * 0x3E2705A53B1D4A09

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} ropeID [Ref]
 * @returns {boolean}  
 */
export function doesRopeExist(ropeID: IntRef /* ptr */): boolean {
	const doesRopeExist_result = Citizen.invokeNative<boolean>('0x3E2705A53B1D4A09', ropeID.dataView);
	return doesRopeExist_result;
}