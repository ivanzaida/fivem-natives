/**
 * CFX:GET_INTERIOR_ROOM_NAME
 *
 * 0x11755DF2

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} roomIndex Interior room index.
 * @returns {string}  Room's name.
 */
export function getInteriorRoomName(interiorId: number, roomIndex: number): string {
	const getInteriorRoomName_result = Citizen.invokeNative<string>('0x11755DF2', interiorId, roomIndex);
	return getInteriorRoomName_result;
}