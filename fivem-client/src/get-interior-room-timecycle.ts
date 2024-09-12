/**
 * CFX:GET_INTERIOR_ROOM_TIMECYCLE
 *
 * 0x82BA3F88

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} roomIndex Interior room index.
 * @returns {number}  Room's timecycle hash.
 */
export function getInteriorRoomTimecycle(interiorId: number, roomIndex: number): number {
	const getInteriorRoomTimecycle_result = Citizen.invokeNative<number>('0x82BA3F88', interiorId, roomIndex);
	return getInteriorRoomTimecycle_result;
}