/**
 * CFX:GET_INTERIOR_PORTAL_ROOM_TO
 *
 * 0X3F47F0E8

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @returns {number}  Portal's room TO index.
 */
export function getInteriorPortalRoomTo(interiorId: number, portalIndex: number): number {
	const getInteriorPortalRoomTo_result = Citizen.invokeNative<number>('0X3F47F0E8', interiorId, portalIndex);
	return getInteriorPortalRoomTo_result;
}