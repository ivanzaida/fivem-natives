/**
 * CFX:GET_INTERIOR_PORTAL_ENTITY_FLAG
 *
 * 0X9DA2E811

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @param {number} entityIndex Portal entity index.
 * @returns {number}  Portal entity flag.
 */
export function getInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number): number {
	const getInteriorPortalEntityFlag_result = Citizen.invokeNative<number>('0X9DA2E811', interiorId, portalIndex, entityIndex);
	return getInteriorPortalEntityFlag_result;
}