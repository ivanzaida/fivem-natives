/**
 * CFX:SET_INTERIOR_ROOM_EXTENTS
 *
 * 0X4FDCF51E

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} roomIndex Interior room index.
 * @param {number} bbMinX
 * @param {number} bbMinY
 * @param {number} bbMinZ
 * @param {number} bbMaxX
 * @param {number} bbMaxY
 * @param {number} bbMaxZ
 */
export function setInteriorRoomExtents(interiorId: number, roomIndex: number, bbMinX: number, bbMinY: number, bbMinZ: number, bbMaxX: number, bbMaxY: number, bbMaxZ: number): void {
	const setInteriorRoomExtents_result = Citizen.invokeNative<void>('0X4FDCF51E', interiorId, roomIndex, bbMinX, bbMinY, bbMinZ, bbMaxX, bbMaxY, bbMaxZ);
	return setInteriorRoomExtents_result;
}