import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_INTERIOR_ROTATION
 *
 * 0X5A039998

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {FloatRef} rotx [Ref]
 * @param {FloatRef} rotY [Ref]
 * @param {FloatRef} rotZ [Ref]
 * @param {FloatRef} rotW [Ref]
 */
export function getInteriorRotation(interiorId: number, rotx: FloatRef /* ptr */, rotY: FloatRef /* ptr */, rotZ: FloatRef /* ptr */, rotW: FloatRef /* ptr */): void {
	const getInteriorRotation_result = Citizen.invokeNative<void>('0X5A039998', interiorId, rotx.dataView, rotY.dataView, rotZ.dataView, rotW.dataView);
	return getInteriorRotation_result;
}