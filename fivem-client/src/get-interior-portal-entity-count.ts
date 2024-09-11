/**
 * CFX:GET_INTERIOR_PORTAL_ENTITY_COUNT
 *
 * 0XC68021B

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @returns {number}  Portal entity count.
 */
export function getInteriorPortalEntityCount(interiorId: number, portalIndex: number): number {
	const getInteriorPortalEntityCount_result = Citizen.invokeNative<number>('0XC68021B', interiorId, portalIndex);
	return getInteriorPortalEntityCount_result;
}