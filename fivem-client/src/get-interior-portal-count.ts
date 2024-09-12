/**
 * CFX:GET_INTERIOR_PORTAL_COUNT
 *
 * 0XD05BB8B1

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @returns {number}  The amount of portals in interior.
 */
export function getInteriorPortalCount(interiorId: number): number {
	const getInteriorPortalCount_result = Citizen.invokeNative<number>('0XD05BB8B1', interiorId);
	return getInteriorPortalCount_result;
}