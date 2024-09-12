import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_INTERIOR_POSITION
 *
 * 0X77A435B0

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {FloatRef} posX [Ref]
 * @param {FloatRef} posY [Ref]
 * @param {FloatRef} posZ [Ref]
 */
export function getInteriorPosition(interiorId: number, posX: FloatRef /* ptr */, posY: FloatRef /* ptr */, posZ: FloatRef /* ptr */): void {
	const getInteriorPosition_result = Citizen.invokeNative<void>('0X77A435B0', interiorId, posX.dataView, posY.dataView, posZ.dataView);
	return getInteriorPosition_result;
}