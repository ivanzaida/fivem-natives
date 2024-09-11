import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_INTERIOR_PORTAL_ENTITY_POSITION
 *
 * 0X9B7AB83C

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @param {number} entityIndex Portal entity index.
 * @param {FloatRef} posX [Ref]
 * @param {FloatRef} posY [Ref]
 * @param {FloatRef} posZ [Ref]
 */
export function getInteriorPortalEntityPosition(interiorId: number, portalIndex: number, entityIndex: number, posX: FloatRef /* ptr */, posY: FloatRef /* ptr */, posZ: FloatRef /* ptr */): void {
	const getInteriorPortalEntityPosition_result = Citizen.invokeNative<void>('0X9B7AB83C', interiorId, portalIndex, entityIndex, posX.dataView, posY.dataView, posZ.dataView);
	return getInteriorPortalEntityPosition_result;
}