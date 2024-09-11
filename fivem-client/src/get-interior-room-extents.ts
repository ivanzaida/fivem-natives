import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_INTERIOR_ROOM_EXTENTS
 *
 * 0XF9E795DD

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} roomIndex Interior room index.
 * @param {FloatRef} bbMinX [Ref]
 * @param {FloatRef} bbMinY [Ref]
 * @param {FloatRef} bbMinZ [Ref]
 * @param {FloatRef} bbMaxX [Ref]
 * @param {FloatRef} bbMaxY [Ref]
 * @param {FloatRef} bbMaxZ [Ref]
 */
export function getInteriorRoomExtents(interiorId: number, roomIndex: number, bbMinX: FloatRef /* ptr */, bbMinY: FloatRef /* ptr */, bbMinZ: FloatRef /* ptr */, bbMaxX: FloatRef /* ptr */, bbMaxY: FloatRef /* ptr */, bbMaxZ: FloatRef /* ptr */): void {
	const getInteriorRoomExtents_result = Citizen.invokeNative<void>('0XF9E795DD', interiorId, roomIndex, bbMinX.dataView, bbMinY.dataView, bbMinZ.dataView, bbMaxX.dataView, bbMaxY.dataView, bbMaxZ.dataView);
	return getInteriorRoomExtents_result;
}