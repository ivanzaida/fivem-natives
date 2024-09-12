/**
 * OBJECT:DOOR_SYSTEM_GET_IS_PHYSICS_LOADED
 *
 * 0xC8E94211877921FE

 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @returns {boolean}  
 */
export function doorSystemGetIsPhysicsLoaded(doorEnumHash: number): boolean {
	const doorSystemGetIsPhysicsLoaded_result = Citizen.invokeNative<boolean>('0xC8E94211877921FE', doorEnumHash);
	return doorSystemGetIsPhysicsLoaded_result;
}