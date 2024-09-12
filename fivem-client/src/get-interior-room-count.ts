/**
 * CFX:GET_INTERIOR_ROOM_COUNT
 *
 * 0xA2737C2C

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @returns {number}  The amount of rooms in interior.
 */
export function getInteriorRoomCount(interiorId: number): number {
	const getInteriorRoomCount_result = Citizen.invokeNative<number>('0xA2737C2C', interiorId);
	return getInteriorRoomCount_result;
}