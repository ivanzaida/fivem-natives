import { IntRef } from '@ivanzaida/structures'

/**
 * ENTITY:SET_OBJECT_AS_NO_LONGER_NEEDED
 *
 * 0xB3B56385ECA230B4

 * 
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {IntRef} object [Ref]
 */
export function setObjectAsNoLongerNeeded(object: IntRef /* ptr */): void {
	const setObjectAsNoLongerNeeded_result = Citizen.invokeNative<void>('0xB3B56385ECA230B4', object.dataView);
	return setObjectAsNoLongerNeeded_result;
}