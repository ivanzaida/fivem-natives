/**
 * CFX:GET_INTERIOR_PORTAL_FLAG
 *
 * 0XC74DA47C

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @returns {number}  Portal's flag.
 */
export function getInteriorPortalFlag(interiorId: number, portalIndex: number): number {
	const getInteriorPortalFlag_result = Citizen.invokeNative<number>('0XC74DA47C', interiorId, portalIndex);
	return getInteriorPortalFlag_result;
}