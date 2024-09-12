/**
 * CFX:SET_INTERIOR_PORTAL_ROOM_FROM
 *
 * 0x298FC783

 * 
 * ------------------------------------------------------------------
 * @param {number} interiorId The target interior.
 * @param {number} portalIndex Interior portal index.
 * @param {number} roomFrom New value.
 */
export function setInteriorPortalRoomFrom(interiorId: number, portalIndex: number, roomFrom: number): void {
	const setInteriorPortalRoomFrom_result = Citizen.invokeNative<void>('0x298FC783', interiorId, portalIndex, roomFrom);
	return setInteriorPortalRoomFrom_result;
}