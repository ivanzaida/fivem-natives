/**
 * CFX:SET_INTERIOR_PORTAL_ENTITY_FLAG
 *
 * 0X8349CD76

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @param {number} entityIndex Portal entity index.
 * @param {number} flag New flag value.
 */
export function setInteriorPortalEntityFlag(interiorId: number, portalIndex: number, entityIndex: number, flag: number): void {
	const setInteriorPortalEntityFlag_result = Citizen.invokeNative<void>('0X8349CD76', interiorId, portalIndex, entityIndex, flag);
	return setInteriorPortalEntityFlag_result;
}