import { ObjectIndex } from '@ivanzaida/structures'

/**
 * NETWORK:NETWORK_SET_OBJECT_SCOPE_DISTANCE
 *
 * 0x9059372A0C629EB6

 * 
 * Sets the scope distance for an object - this is the distance in metres from a remote player at which the object will get created on his machine. Passing in 0 will make the object revert to the default distance.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ObjectIndex} objectID
 * @param {number} distance
 */
export function networkSetObjectScopeDistance(objectID: ObjectIndex, distance: number): void {
	const networkSetObjectScopeDistance_result = Citizen.invokeNative<void>('0x9059372A0C629EB6', objectID, distance);
	return networkSetObjectScopeDistance_result;
}