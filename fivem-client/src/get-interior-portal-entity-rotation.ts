import { FloatRef } from '@ivanzaida/structures'

/**
 * CFX:GET_INTERIOR_PORTAL_ENTITY_ROTATION
 *
 * 0X9F9CEB63

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @param {number} entityIndex Portal entity index.
 * @param {FloatRef} rotX [Ref]
 * @param {FloatRef} rotY [Ref]
 * @param {FloatRef} rotZ [Ref]
 * @param {FloatRef} rotW [Ref]
 */
export function getInteriorPortalEntityRotation(interiorId: number, portalIndex: number, entityIndex: number, rotX: FloatRef /* ptr */, rotY: FloatRef /* ptr */, rotZ: FloatRef /* ptr */, rotW: FloatRef /* ptr */): void {
	const getInteriorPortalEntityRotation_result = Citizen.invokeNative<void>('0X9F9CEB63', interiorId, portalIndex, entityIndex, rotX.dataView, rotY.dataView, rotZ.dataView, rotW.dataView);
	return getInteriorPortalEntityRotation_result;
}