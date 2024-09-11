import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_INTERIOR_ENTITIES_EXTENTS
 *
 * 0X322B1192

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {FloatRef} bbMinX [Ref]
 * @param {FloatRef} bbMinY [Ref]
 * @param {FloatRef} bbMinZ [Ref]
 * @param {FloatRef} bbMaxX [Ref]
 * @param {FloatRef} bbMaxY [Ref]
 * @param {FloatRef} bbMaxZ [Ref]
 */
export function getInteriorEntitiesExtents(interiorId: number, bbMinX: FloatRef /* ptr */, bbMinY: FloatRef /* ptr */, bbMinZ: FloatRef /* ptr */, bbMaxX: FloatRef /* ptr */, bbMaxY: FloatRef /* ptr */, bbMaxZ: FloatRef /* ptr */): void {
	const getInteriorEntitiesExtents_result = Citizen.invokeNative<void>('0X322B1192', interiorId, bbMinX.dataView, bbMinY.dataView, bbMinZ.dataView, bbMaxX.dataView, bbMaxY.dataView, bbMaxZ.dataView);
	return getInteriorEntitiesExtents_result;
}