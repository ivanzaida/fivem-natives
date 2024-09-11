/**
 * CFX:SET_INTERIOR_PORTAL_CORNER_POSITION
 *
 * 0X87F43553

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @param {number} cornerIndex Interior corner index.
 * @param {number} posX
 * @param {number} posY
 * @param {number} posZ
 */
export function setInteriorPortalCornerPosition(interiorId: number, portalIndex: number, cornerIndex: number, posX: number, posY: number, posZ: number): void {
	const setInteriorPortalCornerPosition_result = Citizen.invokeNative<void>('0X87F43553', interiorId, portalIndex, cornerIndex, posX, posY, posZ);
	return setInteriorPortalCornerPosition_result;
}