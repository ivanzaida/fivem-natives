import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_INTERIOR_PORTAL_CORNER_POSITION
 *
 * 0XF772BB2C

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @param {number} cornerIndex Portal's corner index.
 * @param {FloatRef} posX [Ref]
 * @param {FloatRef} posY [Ref]
 * @param {FloatRef} posZ [Ref]
 */
export function getInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number, posX: FloatRef /* ptr */, posY: FloatRef /* ptr */, posZ: FloatRef /* ptr */): void {
	const getInteriorPortalCornerPosition_result = Citizen.invokeNative<void>('0XF772BB2C', interiorId, portalIndex, cornerIndex, posX.dataView, posY.dataView, posZ.dataView);
	return getInteriorPortalCornerPosition_result;
}