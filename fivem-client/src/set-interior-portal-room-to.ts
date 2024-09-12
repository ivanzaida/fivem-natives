/**
 * CFX:SET_INTERIOR_PORTAL_ROOM_TO
 *
 * 0X58982680

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @param {number} roomTo New value.
 */
export function setInteriorPortalRoomTo(interiorId: number, portalIndex: number, roomTo: number): void {
	const setInteriorPortalRoomTo_result = Citizen.invokeNative<void>('0X58982680', interiorId, portalIndex, roomTo);
	return setInteriorPortalRoomTo_result;
}