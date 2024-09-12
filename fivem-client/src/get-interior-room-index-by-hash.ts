/**
 * CFX:GET_INTERIOR_ROOM_INDEX_BY_HASH
 *
 * 0xE0EE05F8

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} roomHash Interior room hash.
 * @returns {number}  Room index, -1 if failed.
 */
export function getInteriorRoomIndexByHash(interiorId: number, roomHash: number): number {
	const getInteriorRoomIndexByHash_result = Citizen.invokeNative<number>('0xE0EE05F8', interiorId, roomHash);
	return getInteriorRoomIndexByHash_result;
}