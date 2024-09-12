/**
 * CFX:GET_INTERIOR_ROOM_FLAG
 *
 * 0x6B7AF743

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} roomIndex Interior room index.
 * @returns {number}  Room's flag.
 */
export function getInteriorRoomFlag(interiorId: number, roomIndex: number): number {
	const getInteriorRoomFlag_result = Citizen.invokeNative<number>('0x6B7AF743', interiorId, roomIndex);
	return getInteriorRoomFlag_result;
}