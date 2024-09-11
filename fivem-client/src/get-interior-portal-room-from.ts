/**
 * CFX:GET_INTERIOR_PORTAL_ROOM_FROM
 *
 * 0XAA9C141D

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @returns {number}  Portal's room FROM index.
 */
export function getInteriorPortalRoomFrom(interiorId: number, portalIndex: number): number {
	const getInteriorPortalRoomFrom_result = Citizen.invokeNative<number>('0XAA9C141D', interiorId, portalIndex);
	return getInteriorPortalRoomFrom_result;
}