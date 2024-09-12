/**
 * OBJECT:DOOR_SYSTEM_GET_AUTOMATIC_DISTANCE
 *
 * 0xE29951C625F69A92

 * 
 * ------------------------------------------------------------------
 * @param {number} doorEnumHash
 * @returns {number}  
 */
export function doorSystemGetAutomaticDistance(doorEnumHash: number): number {
	const doorSystemGetAutomaticDistance_result = Citizen.invokeNative<number>('0xE29951C625F69A92', doorEnumHash);
	return doorSystemGetAutomaticDistance_result;
}