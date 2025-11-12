import { IntRef } from '@ivanzaida/structures'

/**
 * ENTITY:SET_PED_AS_NO_LONGER_NEEDED
 *
 * 0xF09E30AF1B8FB379

 * 
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} ped [Ref]
 */
export function setPedAsNoLongerNeeded(ped: IntRef /* ptr */): void {
	const setPedAsNoLongerNeeded_result = Citizen.invokeNative<void>('0xF09E30AF1B8FB379', ped.dataView);
	return setPedAsNoLongerNeeded_result;
}