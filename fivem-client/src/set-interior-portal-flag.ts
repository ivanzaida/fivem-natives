/**
 * CFX:SET_INTERIOR_PORTAL_FLAG
 *
 * 0x88B2355E

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @param {number} flag New flag value.
 */
export function setInteriorPortalFlag(interiorId: number, portalIndex: number, flag: number): void {
	const setInteriorPortalFlag_result = Citizen.invokeNative<void>('0x88B2355E', interiorId, portalIndex, flag);
	return setInteriorPortalFlag_result;
}