/**
 * CFX:SET_INTERIOR_ROOM_FLAG
 *
 * 0x5518D60B

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} roomIndex Interior room index.
 * @param {number} flag New flag value.
 */
export function setInteriorRoomFlag(interiorId: number, roomIndex: number, flag: number): void {
	const setInteriorRoomFlag_result = Citizen.invokeNative<void>('0x5518D60B', interiorId, roomIndex, flag);
	return setInteriorRoomFlag_result;
}