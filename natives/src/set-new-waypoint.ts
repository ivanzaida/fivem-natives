/**
 * HUD:SET_NEW_WAYPOINT
 *
 * 0xF8D9A55D2F2892CC

 * 
 * ------------------------------------------------------------------
 * @param {number} posX
 * @param {number} posY
 */
export function setNewWaypoint(posX: number, posY: number): void {
	const setNewWaypoint_result = Citizen.invokeNative<void>('0xF8D9A55D2F2892CC', posX, posY);
	return setNewWaypoint_result;
}