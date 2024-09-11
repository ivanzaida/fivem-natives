/**
 * CFX:SET_INTERIOR_ROOM_TIMECYCLE
 *
 * 0X31C9A848

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} roomIndex Interior room index.
 * @param {number} timecycleHash Timecycle hash.
 */
export function setInteriorRoomTimecycle(interiorId: number, roomIndex: number, timecycleHash: number): void {
	const setInteriorRoomTimecycle_result = Citizen.invokeNative<void>('0X31C9A848', interiorId, roomIndex, timecycleHash);
	return setInteriorRoomTimecycle_result;
}