/**
 * HUD:SET_MINIMAP_BLOCK_WAYPOINT
 *
 * 0x006887B244C43D52

 * 
 * ------------------------------------------------------------------
 * @param {boolean} block
 */
export function setMinimapBlockWaypoint(block: boolean): void {
	const setMinimapBlockWaypoint_result = Citizen.invokeNative<void>('0x006887B244C43D52', block);
	return setMinimapBlockWaypoint_result;
}